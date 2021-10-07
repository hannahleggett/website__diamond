/*! For license information please see main.9698757ac1afdc59c1d3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatediamond("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var i=s("./node_modules/lodash/each.js"),n=s.n(i),a=s("./node_modules/lodash/map.js"),o=s.n(a),l=s("./node_modules/gsap/index.js"),r=s("./node_modules/normalize-wheel/index.js"),h=s.n(r),m=s("./node_modules/prefix/index.js"),c=s.n(m),d=s("./app/animations/Description.js"),u=s("./app/animations/Menutext.js"),p=s("./app/animations/Title.js"),w=s("./app/classes/Hover.js");class f{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsDescriptions:'[data-animations="description"]',animationsMenutext:'[data-animations="menutext"]',animationsTitles:'[data-animations="title"]',hoverItems:'[data-animations="hover"]'},this.scroll={current:0,target:0,last:0,limit:0},this.id=s,this.transformPrefix=c()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.selector instanceof window.HTMLElement?this.element=this.selector:this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},n()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=this.element.querySelector(e)))})),this.createAnimations()}createAnimations(){console.log(this.elements.animationsMenutext),this.animations=[],this.animationsDescriptions=o()(this.elements.animationsDescriptions,(e=>new d.default({element:e}))),this.animations.push(...this.animationsDescriptions),this.animationsMenutext=o()(this.elements.animationsMenutext,(e=>new u.default({element:e}))),this.animations.push(...this.animationsMenutext),this.animationsTitles=o()(this.elements.animationsTitles,(e=>new p.default({element:e}))),this.animations.push(...this.animationsTitles),this.hoverItems=o()(this.elements.hoverItems,(e=>new w.default({element:e}))),this.animations.push(...this.hoverItems)}createObserver(){this.observer=new window.ResizeObserver((e=>{for(const t of e)window.requestAnimationFrame((e=>{this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight}))})),this.observer.observe(this.elements.wrapper)}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=l.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=h()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),n()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current<.01&&(this.scroll.current=0),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"37e70dbf36082e4787a6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjdDLEtBQUswRCxvQkFFTE4sVUFLTk8sT0FDRSxPQUFPLElBQUlSLFNBQVFDLElBQ2pCcEQsS0FBSzRELHVCQUVMNUQsS0FBSzZELGFBQWVQLEVBQUFBLFFBQUFBLFdBRXBCdEQsS0FBSzZELGFBQWFDLEdBQUc5RCxLQUFLSCxRQUFTLENBQ2pDMkQsVUFBVyxFQUNYTyxXQUFZWCxPQVNsQnJDLGFBQWNpRCxHQUNaLE1BQU0sT0FBRUMsR0FBV0MsR0FBQUEsQ0FBZUYsR0FFbENoRSxLQUFLTyxPQUFPRSxRQUFVd0QsRUFHeEJFLFdBQ01uRSxLQUFLRixTQUFTZ0QsVUFDaEI5QyxLQUFLTyxPQUFPSSxNQUFRWCxLQUFLRixTQUFTZ0QsUUFBUUMsYUFBZTdCLE9BQU84QixhQUdsRTFCLEdBQUFBLENBQUt0QixLQUFLaUMsWUFBWW1DLEdBQWFBLEVBQVVELGFBRy9DRSxTQUNFckUsS0FBS08sT0FBT0UsT0FBUzZDLEVBQUFBLFFBQUFBLE1BQUFBLE1BQWlCLEVBQUd0RCxLQUFLTyxPQUFPSSxNQUFPWCxLQUFLTyxPQUFPRSxRQUVwRVQsS0FBS08sT0FBT0MsUUFBVSxNQUN4QlIsS0FBS08sT0FBT0MsUUFBVSxHQUd4QlIsS0FBS08sT0FBT0MsUUFBVThDLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCdEQsS0FBS08sT0FBT0MsUUFBU1IsS0FBS08sT0FBT0UsT0FBUSxJQUlsRlQsS0FBS0YsU0FBU2dELFVBQ2hCOUMsS0FBS0YsU0FBU2dELFFBQVF3QixNQUFNdEUsS0FBS1ksaUJBQW9CLGVBQWNaLEtBQUtPLE9BQU9DLGNBUW5Ga0Qsb0JBQ0V4QyxPQUFPcUQsaUJBQWlCLGFBQWN2RSxLQUFLYyxtQkFHN0M4Qyx1QkFDRTFDLE9BQU9zRCxvQkFBb0IsYUFBY3hFLEtBQUtjLG9DQy9NbEQyRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlhbW9uZC8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZGlhbW9uZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnYW5pbWF0aW9ucy9EZXNjcmlwdGlvbidcbmltcG9ydCBNZW51dGV4dCBmcm9tICdhbmltYXRpb25zL01lbnV0ZXh0J1xuaW1wb3J0IFRpdGxlIGZyb20gJ2FuaW1hdGlvbnMvVGl0bGUnXG5cbmltcG9ydCBIb3ZlciBmcm9tICdjbGFzc2VzL0hvdmVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50cyxcbiAgICBpZFxuICB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50cyxcblxuICAgICAgYW5pbWF0aW9uc0Rlc2NyaXB0aW9uczogJ1tkYXRhLWFuaW1hdGlvbnM9XCJkZXNjcmlwdGlvblwiXScsXG4gICAgICBhbmltYXRpb25zTWVudXRleHQ6ICdbZGF0YS1hbmltYXRpb25zPVwibWVudXRleHRcIl0nLFxuICAgICAgYW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbnM9XCJ0aXRsZVwiXScsXG4gICAgICBob3Zlckl0ZW1zOiAnW2RhdGEtYW5pbWF0aW9ucz1cImhvdmVyXCJdJ1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIHRoaXMuaWQgPSBpZFxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBwYWdlcyBhbmQgY29udGVudC5cbiAgICovXG4gIGNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuc2VsZWN0b3JcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIC8vIG1hbmFnaW5nIHNlbGVjdG9yIHR5cGVzXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzKVxuICAgIC8vIGNvbnNvbGUubG9nKCdDcmVhdGUnLCB0aGlzLmlkLCB0aGlzLmVsZW1lbnQpXG4gIH1cblxuICAvKipcbiAgICogRWxlbWVudCBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucyAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy5hbmltYXRpb25zTWVudXRleHQpXG4gICAgdGhpcy5hbmltYXRpb25zID0gW11cblxuICAgIHRoaXMuYW5pbWF0aW9uc0Rlc2NyaXB0aW9ucyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNEZXNjcmlwdGlvbnMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEZXNjcmlwdGlvbih7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zRGVzY3JpcHRpb25zKVxuXG4gICAgdGhpcy5hbmltYXRpb25zTWVudXRleHQgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zTWVudXRleHQsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZW51dGV4dCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zTWVudXRleHQpXG5cbiAgICB0aGlzLmFuaW1hdGlvbnNUaXRsZXMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1RpdGxlcylcblxuICAgIHRoaXMuaG92ZXJJdGVtcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmhvdmVySXRlbXMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBIb3Zlcih7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5ob3Zlckl0ZW1zKVxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hbmltYXRpb25zVGl0bGVzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNtb290aCBzY3JvbGwuXG4gICAqL1xuICBjcmVhdGVPYnNlcnZlciAoKSB7XG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICB9XG5cbiAgLyoqXG4gICAqIFBhZ2UgQW5pbWF0aW9ucy5cbiAgICovXG5cbiAgc2hvdyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb21Ubyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwXG4gICAgICB9LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMVxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKF8gPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU21vb3RoIHNjcm9sbC5cbiAgICovXG5cbiAgb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudClcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcbiAgfVxuXG4gIG9uUmVzaXplICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5lcnMuXG4gICAqL1xuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycyAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzN2U3MGRiZjM2MDgyZTQ3ODdhNlwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25zRGVzY3JpcHRpb25zIiwiYW5pbWF0aW9uc01lbnV0ZXh0IiwiYW5pbWF0aW9uc1RpdGxlcyIsImhvdmVySXRlbXMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4Iiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwiY3JlYXRlIiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGlvbnMiLCJtYXAiLCJEZXNjcmlwdGlvbiIsInB1c2giLCJNZW51dGV4dCIsIlRpdGxlIiwiSG92ZXIiLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9ic2VydmUiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJjYWxsIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJ0byIsIm9uQ29tcGxldGUiLCJldmVudCIsInBpeGVsWSIsIk5vcm1hbGl6ZVdoZWVsIiwib25SZXNpemUiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9