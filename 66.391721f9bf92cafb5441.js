"use strict";(self.webpackChunkweather=self.webpackChunkweather||[]).push([[66],{66:(P,l,i)=>{i.r(l),i.d(l,{FavoritesModule:()=>A});var r=i(8583),p=i(9038),m=i(1709),s=i(4655),t=i(7716),f=i(200),v=i(8002),u=i(8070),g=i(7621),d=i(2641),h=i(5841);function x(e,o){if(1&e&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&e){const n=o.ngIf,a=t.oxw().ngIf;t.xp6(1),t.AsE(" ",a.temperature.getUnitByType(n).value," ",n,"\xb0 ")}}function _(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2),t._uU(2),t.qZA(),t.TgZ(3,"div",3),t._uU(4),t.ALo(5,"date"),t.qZA(),t.YNc(6,x,2,2,"div",4),t.ALo(7,"async"),t.TgZ(8,"div",5),t._uU(9),t.qZA(),t.BQk()),2&e){const n=o.ngIf,a=t.oxw();t.xp6(2),t.Oqu(a.city.localizedName),t.xp6(2),t.Oqu(t.xi3(5,4,n.localObservationDateTime,"EEEE, dd MMMM")),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,7,a.temperatureType)),t.xp6(3),t.Oqu(n.weatherText)}}function y(e,o){1&e&&t._UZ(0,"app-spinner")}let C=(()=>{class e{constructor(n,a){this.weatherService=n,this.temperatureType=a,this.TemperatureType=g.P}ngOnInit(){this.weather=this.weatherService.getCurrentCityWeather(this.city.key).pipe((0,v.U)(n=>n[0]))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.F),t.Y36(u.b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorite-item"]],inputs:{city:"city"},decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"city"],[1,"date"],["class","temperature",4,"ngIf"],[1,"text"],[1,"temperature"]],template:function(n,a){if(1&n&&(t.YNc(0,_,10,9,"ng-container",0),t.ALo(1,"async"),t.YNc(2,y,1,0,"ng-template",null,1,t.W1O)),2&n){const c=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,a.weather))("ngIfElse",c)}},directives:[r.O5,h.O],pipes:[r.Ov,r.uU],styles:["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;width:150px;padding:12px;border-radius:4px;background-color:#e8f0f6;transition:background-color,.5s;align-items:center;cursor:pointer}[_nghost-%COMP%]:hover{background-color:#d6e4ef;transition:all,.5s}.city[_ngcontent-%COMP%]{font-weight:700;margin-bottom:8px}.temperature[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:24px;margin:8px 0}.text[_ngcontent-%COMP%]{font-size:24px}"]}),e})();var F=i(3900);function M(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"app-favorite-item",4),t.NdJ("click",function(){const w=t.CHM(n).$implicit;return t.oxw(2).showFavorite(w)}),t.qZA()}2&e&&t.Q6J("city",o.$implicit)}function O(e,o){if(1&e&&(t.ynx(0),t.YNc(1,M,1,1,"app-favorite-item",3),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.favoriteLocations)}}function T(e,o){1&e&&(t.TgZ(0,"div",5),t.TgZ(1,"div",6),t._uU(2,"There is nothing in the favorites yet..."),t.qZA(),t.TgZ(3,"div",7),t._uU(4,"You can add to favorites any location from the main page"),t.qZA(),t.TgZ(5,"div",8),t._UZ(6,"app-back-to-home-button"),t.qZA(),t.qZA())}const Z=[{path:"",component:(()=>{class e{constructor(n,a){this.favoriteService=n,this.router=a,this.favoriteLocations=[],this.title="Favorites",this.favoriteLocations=this.favoriteService.get()}ngOnInit(){this.favoriteService.currentFavoriteLocation=null}showFavorite(n){this.favoriteService.currentFavoriteLocation=n,this.router.navigate(["home"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.e),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorites"]],decls:4,vars:2,consts:[[1,"content"],[4,"ngIf","ngIfElse"],["default",""],["class","favorite",3,"city","click",4,"ngFor","ngForOf"],[1,"favorite",3,"city","click"],[1,"default"],[1,"default__text"],[1,"default__text","default__text--small"],[1,"default__action"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,O,2,1,"ng-container",1),t.qZA(),t.YNc(2,T,7,0,"ng-template",null,2,t.W1O)),2&n){const c=t.MAs(3);t.xp6(1),t.Q6J("ngIf",a.favoriteLocations.length)("ngIfElse",c)}},directives:[r.O5,r.sg,C,F.$],styles:[".content[_ngcontent-%COMP%]{display:flex;flex-direction:row}.content[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%] + .favorite[_ngcontent-%COMP%]{margin-left:12px}.content[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;width:100%}.content[_ngcontent-%COMP%]   .default__text[_ngcontent-%COMP%]{margin-bottom:16px;font-size:24px;font-weight:500;text-align:center}.content[_ngcontent-%COMP%]   .default__text--small[_ngcontent-%COMP%]{max-width:340px;font-size:20px}"],changeDetection:0}),e})()}];let I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,I,m.F,p.K]]}),e})()}}]);