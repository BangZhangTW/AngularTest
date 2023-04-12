import {Component, ElementRef, ViewChild} from "@angular/core"
import KeenSlider, {KeenSliderInstance} from "keen-slider"
import {HttpService} from "./http-service";
import {MagazineList} from "./magazine-list";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [
    "../../node_modules/keen-slider/keen-slider.min.css",
    "./app.component.css",
  ],
})

export class AppComponent {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> | undefined
  magazines: Array<MagazineList> = [];
  slider: KeenSliderInstance | undefined
  dotHelper: Array<Number> = []
  currentSlide: number = 0

  constructor(
    private magazineService: HttpService
  ) {
  }

  ngAfterViewInit() {
    this.magazineService.getMagazineList()
      .subscribe(
        res => {
          this.magazines = res
          setTimeout(() => {
            this.initSlide();
          }, 1);
        }
      )
  }

  initSlide() {
    // @ts-ignore
    this.slider = new KeenSlider(this.sliderRef?.nativeElement, {
      loop: true,
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    })
    this.dotHelper = [
      ...Array(this.slider.track.details.slides.length).keys(),
    ]
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
