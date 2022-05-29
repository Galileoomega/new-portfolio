import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showWelcomeTextA: boolean = true;
  public showWelcomeTextB: boolean = false;
  public showWelcomeTextC: boolean = false;
  public activeMenu: string = "websites";
  public actualShowingSite: string = "";

  public showSites: boolean = false;

  public orbitImage: string = "/assets/waterfall.webp";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showWelcomeTextA = false;
      this.showWelcomeTextB = true;
      setTimeout(() => {
        this.showWelcomeTextA = false;
        this.showWelcomeTextB = false;
        this.showWelcomeTextC = true;
        setTimeout(() => {
          this.showSites = true;
        }, 100)
      }, 100)
    }, 100)
  }

  public scrollToSites(): void {
    window.scroll(0,1300);
  }

  public onMenu(menu: string): void {
    this.activeMenu = menu;
  }

  public openSite(menu: string): void {
    this.actualShowingSite = menu;
  }
}
