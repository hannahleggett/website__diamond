/*! For license information please see main.8b3c2aebda70a2937aeb.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatediamond("main",{"./app/classes/Hover.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var r=i("./app/classes/Component.js"),s=i("./node_modules/gsap/index.js");Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}());let a={x:0,y:0},n=a,o={x:n.x-a.x,y:n.y-a.y};class l extends r.default{constructor({element:e}){super({element:e}),this.DOM=this.element,this.element.image=e.getAttribute("data-src"),this.layout(),this.initEvents()}layout(){this.DOM.reveal=document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.revealInner=document.createElement("div"),this.DOM.revealInner.className="hover-reveal__inner",this.DOM.revealImage=document.createElement("div"),this.DOM.revealImage.className="hover-reveal__img",this.DOM.revealImage.style.backgroundImage=`url(${this.element.image})`,this.DOM.revealInner.appendChild(this.DOM.revealImage),this.DOM.reveal.appendChild(this.DOM.revealInner),this.DOM.el.appendChild(this.DOM.reveal)}onMouseEnter(){this.showImage(),this.firstRAFCycle=!0,this.loopRender()}onMouseLeave(){this.stopRendering(),this.hideImage()}showImage(){s.default.killTweensOf(this.DOM.revealInner),s.default.killTweensOf(this.DOM.revealImage),this.tl=s.default.timeline({onStart:()=>{this.DOM.reveal.style.opacity=1,s.default.set(this.DOM.el,{zIndex:images.length})}}).to(this.DOM.revealInner,.2,{ease:"Sine.easeOut",startAt:{x:o.x<0?"-100%":"100%"},x:"0%"}).to(this.DOM.revealImage,.2,{ease:"Sine.easeOut",startAt:{x:o.x<0?"100%":"-100%"},x:"0%"},0)}hideImage(){s.default.killTweensOf(this.DOM.revealInner),s.default.killTweensOf(this.DOM.revealImage),this.tl=s.default.timeline({onStart:()=>{s.default.set(this.DOM.el,{zIndex:1})},onComplete:()=>{s.default.set(this.DOM.reveal,{opacity:0})}}).to(this.DOM.revealInner,.2,{ease:"Sine.easeOut",x:o.x<0?"100%":"-100%"}).to(this.DOM.revealImage,.2,{ease:"Sine.easeOut",x:o.x<0?"-100%":"100%"},0)}loopRender(){this.requestId||(this.requestId=requestAnimationFrame((()=>this.render())))}stopRendering(){this.requestId&&(window.cancelAnimationFrame(this.requestId),this.requestId=void 0)}render(){this.requestId=void 0,this.firstRAFCycle&&this.calcBounds();const e=Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(Math.abs(n.x-a.x),0,100);o={x:n.x-a.x,y:n.y-a.y},n={x:a.x,y:a.y},this.animatableProperties.tx.current=Math.abs(a.x-this.bounds.el.left)-this.bounds.reveal.width/2,this.animatableProperties.ty.current=Math.abs(a.y-this.bounds.el.top)-this.bounds.reveal.height/2,this.animatableProperties.rotation.current=this.firstRAFCycle?0:Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(e,0,100,0,o.x<0?60:-60),this.animatableProperties.brightness.current=this.firstRAFCycle?1:Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(e,0,100,1,4),this.animatableProperties.tx.previous=this.firstRAFCycle?this.animatableProperties.tx.current:Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(this.animatableProperties.tx.previous,this.animatableProperties.tx.current,this.animatableProperties.tx.amt),this.animatableProperties.ty.previous=this.firstRAFCycle?this.animatableProperties.ty.current:Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(this.animatableProperties.ty.previous,this.animatableProperties.ty.current,this.animatableProperties.ty.amt),this.animatableProperties.rotation.previous=this.firstRAFCycle?this.animatableProperties.rotation.current:Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(this.animatableProperties.rotation.previous,this.animatableProperties.rotation.current,this.animatableProperties.rotation.amt),this.animatableProperties.brightness.previous=this.firstRAFCycle?this.animatableProperties.brightness.current:Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(this.animatableProperties.brightness.previous,this.animatableProperties.brightness.current,this.animatableProperties.brightness.amt),s.default.set(this.DOM.reveal,{x:this.animatableProperties.tx.previous,y:this.animatableProperties.ty.previous,rotation:this.animatableProperties.rotation.previous,filter:`brightness(${this.animatableProperties.brightness.previous})`}),this.firstRAFCycle=!1,this.loopRender()}addEventListeners(){window.addEventListener("mousemove",(e=>a=Object(function(){var e=new Error("Cannot find module './utils'");throw e.code="MODULE_NOT_FOUND",e}())(e))),this.element.addEventListener("mouseenter",this.onMouseEnter),this.element.addEventListener("mouseleave",this.onMouseLeave)}removeEventListeners(){}}}},(function(e){e.h=()=>"10016d69562db2e290c7"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxFQUFBQSxHQUFBQSxDQUFLMUQsS0FBSzZDLHFCQUFxQlcsV0FBV0MsU0FBVXpELEtBQUs2QyxxQkFBcUJXLFdBQVdULFFBQVMvQyxLQUFLNkMscUJBQXFCVyxXQUFXRyxLQUczUHBDLEVBQUFBLFFBQUFBLElBQVN2QixLQUFLQyxJQUFJSyxPQUFRLENBQ3hCZixFQUFHUyxLQUFLNkMscUJBQXFCQyxHQUFHVyxTQUNoQ2pFLEVBQUdRLEtBQUs2QyxxQkFBcUJNLEdBQUdNLFNBQ2hDSCxTQUFVdEQsS0FBSzZDLHFCQUFxQlMsU0FBU0csU0FDN0NHLE9BQVMsY0FBYTVELEtBQUs2QyxxQkFBcUJXLFdBQVdDLGNBSTdEekQsS0FBS2tCLGVBQWdCLEVBQ3JCbEIsS0FBS21CLGFBR1AwQyxvQkFFRXhCLE9BQU95QixpQkFBaUIsYUFBYUMsR0FBTXpFLEVBQVcwRSxPQUFBQSxXQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxNQUFBQSxnQ0FBQUEsTUFBQUEsRUFBQUEsS0FBQUEsbUJBQUFBLEVBQUFBLEdBQUFBLENBQVlELEtBRWxFL0QsS0FBS0YsUUFBUWdFLGlCQUFpQixhQUFjOUQsS0FBS2dCLGNBQ2pEaEIsS0FBS0YsUUFBUWdFLGlCQUFpQixhQUFjOUQsS0FBS29CLGNBR25ENkMseUNDcExGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlhbW9uZC8uL2FwcC9jbGFzc2VzL0hvdmVyLmpzIiwid2VicGFjazovL2RpYW1vbmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgbWFwLCBsZXJwLCBjbGFtcCwgZ2V0TW91c2VQb3MgfSBmcm9tICcuL3V0aWxzJ1xuXG4vLyB0cmFjayB0aGUgbW91c2UgcG9zaXRpb25cbmxldCBtb3VzZXBvcyA9IHsgeDogMCwgeTogMCB9XG4vLyBjYWNoZSB0aGUgbW91c2UgcG9zaXRpb25cbmxldCBtb3VzZVBvc0NhY2hlID0gbW91c2Vwb3NcblxubGV0IGRpcmVjdGlvbiA9IHtcbiAgeDogbW91c2VQb3NDYWNoZS54IC0gbW91c2Vwb3MueCxcbiAgeTogbW91c2VQb3NDYWNoZS55IC0gbW91c2Vwb3MueVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoeyBlbGVtZW50IH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50XG4gICAgfSlcblxuICAgIHRoaXMuRE9NID0gdGhpcy5lbGVtZW50XG4gICAgdGhpcy5lbGVtZW50LmltYWdlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblxuICAgIC8vIGNyZWF0ZSB0aGUgaW1hZ2Ugc3RydWN0dXJlXG4gICAgdGhpcy5sYXlvdXQoKVxuICAgIC8vIGluaXRpYWxpemUgc29tZSBldmVudHNcbiAgICB0aGlzLmluaXRFdmVudHMoKVxuICB9XG5cbiAgbGF5b3V0ICgpIHtcbiAgICAvLyB0aGlzIGlzIHRoZSBlbGVtZW50IHRoYXQgZ2V0cyBpdHMgcG9zaXRpb24gYW5pbWF0ZWQgKGFuZCBwZXJoYXBzIG90aGVyIHByb3BlcnRpZXMgbGlrZSB0aGUgcm90YXRpb24gZXRjLi4pXG4gICAgdGhpcy5ET00ucmV2ZWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLkRPTS5yZXZlYWwuY2xhc3NOYW1lID0gJ2hvdmVyLXJldmVhbCdcbiAgICAvLyB0aGUgbmV4dCB0d28gZWxlbWVudHMgY291bGQgYWN0dWFsbHkgYmUgb25seSBvbmUsIHRoZSBpbWFnZSBlbGVtZW50XG4gICAgLy8gYWRkaW5nIGFuIGV4dHJhIHdyYXBwZXIgKHJldmVhbElubmVyKSBhcm91bmQgdGhlIGltYWdlIGVsZW1lbnQgd2l0aCBvdmVyZmxvdyBoaWRkZW4sIGdpdmVzIHVzIHRoZSBwb3NzaWJpbGl0eSB0byBzY2FsZSB0aGUgaW1hZ2UgaW5zaWRlXG4gICAgdGhpcy5ET00ucmV2ZWFsSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuRE9NLnJldmVhbElubmVyLmNsYXNzTmFtZSA9ICdob3Zlci1yZXZlYWxfX2lubmVyJ1xuICAgIHRoaXMuRE9NLnJldmVhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLkRPTS5yZXZlYWxJbWFnZS5jbGFzc05hbWUgPSAnaG92ZXItcmV2ZWFsX19pbWcnXG4gICAgdGhpcy5ET00ucmV2ZWFsSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuZWxlbWVudC5pbWFnZX0pYFxuXG4gICAgdGhpcy5ET00ucmV2ZWFsSW5uZXIuYXBwZW5kQ2hpbGQodGhpcy5ET00ucmV2ZWFsSW1hZ2UpXG4gICAgdGhpcy5ET00ucmV2ZWFsLmFwcGVuZENoaWxkKHRoaXMuRE9NLnJldmVhbElubmVyKVxuICAgIHRoaXMuRE9NLmVsLmFwcGVuZENoaWxkKHRoaXMuRE9NLnJldmVhbClcbiAgfVxuXG4gIG9uTW91c2VFbnRlciAoKSB7XG4gICAgLy8gc2hvdyB0aGUgaW1hZ2UgZWxlbWVudFxuICAgIHRoaXMuc2hvd0ltYWdlKClcbiAgICB0aGlzLmZpcnN0UkFGQ3ljbGUgPSB0cnVlXG4gICAgLy8gc3RhcnQgdGhlIHJlbmRlciBsb29wIGFuaW1hdGlvbiAockFGKVxuICAgIHRoaXMubG9vcFJlbmRlcigpXG4gIH1cblxuICBvbk1vdXNlTGVhdmUgKCkge1xuICAgIC8vIHN0b3AgdGhlIHJlbmRlciBsb29wIGFuaW1hdGlvbiAockFGKVxuICAgIHRoaXMuc3RvcFJlbmRlcmluZygpXG4gICAgLy8gaGlkZSB0aGUgaW1hZ2UgZWxlbWVudFxuICAgIHRoaXMuaGlkZUltYWdlKClcbiAgfVxuXG4gIC8vIHNob3cgdGhlIGltYWdlIGVsZW1lbnRcbiAgc2hvd0ltYWdlICgpIHtcbiAgICAvLyBraWxsIGFueSBjdXJyZW50IHR3ZWVuc1xuICAgIEdTQVAua2lsbFR3ZWVuc09mKHRoaXMuRE9NLnJldmVhbElubmVyKVxuICAgIEdTQVAua2lsbFR3ZWVuc09mKHRoaXMuRE9NLnJldmVhbEltYWdlKVxuXG4gICAgdGhpcy50bCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgb25TdGFydDogKCkgPT4ge1xuICAgICAgICAvLyBzaG93IHRoZSBpbWFnZSBlbGVtZW50XG4gICAgICAgIHRoaXMuRE9NLnJldmVhbC5zdHlsZS5vcGFjaXR5ID0gMVxuICAgICAgICAvLyBzZXQgYSBoaWdoIHotaW5kZXggdmFsdWUgc28gaW1hZ2UgYXBwZWFycyBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHNcbiAgICAgICAgR1NBUC5zZXQodGhpcy5ET00uZWwsIHsgekluZGV4OiBpbWFnZXMubGVuZ3RoIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBhbmltYXRlIHRoZSBpbWFnZSB3cmFwXG4gICAgICAudG8odGhpcy5ET00ucmV2ZWFsSW5uZXIsIDAuMiwge1xuICAgICAgICBlYXNlOiAnU2luZS5lYXNlT3V0JyxcbiAgICAgICAgc3RhcnRBdDogeyB4OiBkaXJlY3Rpb24ueCA8IDAgPyAnLTEwMCUnIDogJzEwMCUnIH0sXG4gICAgICAgIHg6ICcwJSdcbiAgICAgIH0pXG4gICAgLy8gYW5pbWF0ZSB0aGUgaW1hZ2UgZWxlbWVudFxuICAgICAgLnRvKHRoaXMuRE9NLnJldmVhbEltYWdlLCAwLjIsIHtcbiAgICAgICAgZWFzZTogJ1NpbmUuZWFzZU91dCcsXG4gICAgICAgIHN0YXJ0QXQ6IHsgeDogZGlyZWN0aW9uLnggPCAwID8gJzEwMCUnIDogJy0xMDAlJyB9LFxuICAgICAgICB4OiAnMCUnXG4gICAgICB9LCAwKVxuICB9XG5cbiAgLy8gaGlkZSB0aGUgaW1hZ2UgZWxlbWVudFxuICBoaWRlSW1hZ2UgKCkge1xuICAgIC8vIGtpbGwgYW55IGN1cnJlbnQgdHdlZW5zXG4gICAgR1NBUC5raWxsVHdlZW5zT2YodGhpcy5ET00ucmV2ZWFsSW5uZXIpXG4gICAgR1NBUC5raWxsVHdlZW5zT2YodGhpcy5ET00ucmV2ZWFsSW1hZ2UpXG5cbiAgICB0aGlzLnRsID0gR1NBUC50aW1lbGluZSh7XG4gICAgICBvblN0YXJ0OiAoKSA9PiB7XG4gICAgICAgIEdTQVAuc2V0KHRoaXMuRE9NLmVsLCB7IHpJbmRleDogMSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgR1NBUC5zZXQodGhpcy5ET00ucmV2ZWFsLCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRvKHRoaXMuRE9NLnJldmVhbElubmVyLCAwLjIsIHtcbiAgICAgICAgZWFzZTogJ1NpbmUuZWFzZU91dCcsXG4gICAgICAgIHg6IGRpcmVjdGlvbi54IDwgMCA/ICcxMDAlJyA6ICctMTAwJSdcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy5ET00ucmV2ZWFsSW1hZ2UsIDAuMiwge1xuICAgICAgICBlYXNlOiAnU2luZS5lYXNlT3V0JyxcbiAgICAgICAgeDogZGlyZWN0aW9uLnggPCAwID8gJy0xMDAlJyA6ICcxMDAlJ1xuICAgICAgfSwgMClcbiAgfVxuXG4gIC8vIHN0YXJ0IHRoZSByZW5kZXIgbG9vcCBhbmltYXRpb24gKHJBRilcbiAgbG9vcFJlbmRlciAoKSB7XG4gICAgaWYgKCF0aGlzLnJlcXVlc3RJZCkge1xuICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXIoKSlcbiAgICB9XG4gIH1cblxuICAvLyBzdG9wIHRoZSByZW5kZXIgbG9vcCBhbmltYXRpb24gKHJBRilcbiAgc3RvcFJlbmRlcmluZyAoKSB7XG4gICAgaWYgKHRoaXMucmVxdWVzdElkKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpXG4gICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZSB0aGUgaXRlbSBhcyB0aGUgbW91c2UgbW92ZXNcbiAgcmVuZGVyICgpIHtcbiAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZFxuICAgIC8vIGNhbGN1bGF0ZSBwb3NpdGlvbi9zaXplcyB0aGUgZmlyc3QgdGltZVxuICAgIGlmICh0aGlzLmZpcnN0UkFGQ3ljbGUpIHtcbiAgICAgIHRoaXMuY2FsY0JvdW5kcygpXG4gICAgfVxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBtb3VzZSBkaXN0YW5jZSAoY3VycmVudCB2cyBwcmV2aW91cyBjeWNsZSlcbiAgICBjb25zdCBtb3VzZURpc3RhbmNlWCA9IGNsYW1wKE1hdGguYWJzKG1vdXNlUG9zQ2FjaGUueCAtIG1vdXNlcG9zLngpLCAwLCAxMDApXG4gICAgLy8gZGlyZWN0aW9uIHdoZXJlIHRoZSBtb3VzZSBpcyBtb3ZpbmdcbiAgICBkaXJlY3Rpb24gPSB7IHg6IG1vdXNlUG9zQ2FjaGUueCAtIG1vdXNlcG9zLngsIHk6IG1vdXNlUG9zQ2FjaGUueSAtIG1vdXNlcG9zLnkgfVxuICAgIC8vIHVwZGF0ZWQgY2FjaGUgdmFsdWVzXG4gICAgbW91c2VQb3NDYWNoZSA9IHsgeDogbW91c2Vwb3MueCwgeTogbW91c2Vwb3MueSB9XG5cbiAgICAvLyBuZXcgdHJhbnNsYXRpb24gdmFsdWVzXG4gICAgLy8gdGhlIGNlbnRlciBvZiB0aGUgaW1hZ2UgZWxlbWVudCBpcyBwb3NpdGlvbmVkIHdoZXJlIHRoZSBtb3VzZSBpc1xuICAgIHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMudHguY3VycmVudCA9IE1hdGguYWJzKG1vdXNlcG9zLnggLSB0aGlzLmJvdW5kcy5lbC5sZWZ0KSAtIHRoaXMuYm91bmRzLnJldmVhbC53aWR0aCAvIDJcbiAgICB0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLnR5LmN1cnJlbnQgPSBNYXRoLmFicyhtb3VzZXBvcy55IC0gdGhpcy5ib3VuZHMuZWwudG9wKSAtIHRoaXMuYm91bmRzLnJldmVhbC5oZWlnaHQgLyAyXG4gICAgLy8gbmV3IHJvdGF0aW9uIHZhbHVlXG4gICAgdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy5yb3RhdGlvbi5jdXJyZW50ID0gdGhpcy5maXJzdFJBRkN5Y2xlID8gMCA6IG1hcChtb3VzZURpc3RhbmNlWCwgMCwgMTAwLCAwLCBkaXJlY3Rpb24ueCA8IDAgPyA2MCA6IC02MClcbiAgICAvLyBuZXcgZmlsdGVyIHZhbHVlXG4gICAgdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy5icmlnaHRuZXNzLmN1cnJlbnQgPSB0aGlzLmZpcnN0UkFGQ3ljbGUgPyAxIDogbWFwKG1vdXNlRGlzdGFuY2VYLCAwLCAxMDAsIDEsIDQpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGludGVycG9sYXRlZCB2YWx1ZXNcbiAgICAvLyBmb3IgdGhlIGZpcnN0IGN5Y2xlLCBib3RoIHRoZSBpbnRlcnBvbGF0ZWQgdmFsdWVzIG5lZWQgdG8gYmUgdGhlIHNhbWUgc28gdGhlcmUncyBubyBcImxlcnBlZFwiIGFuaW1hdGlvbiBiZXR3ZWVuIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCBzdGF0ZVxuICAgIHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMudHgucHJldmlvdXMgPSB0aGlzLmZpcnN0UkFGQ3ljbGUgPyB0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLnR4LmN1cnJlbnQgOiBsZXJwKHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMudHgucHJldmlvdXMsIHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMudHguY3VycmVudCwgdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy50eC5hbXQpXG4gICAgdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy50eS5wcmV2aW91cyA9IHRoaXMuZmlyc3RSQUZDeWNsZSA/IHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMudHkuY3VycmVudCA6IGxlcnAodGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy50eS5wcmV2aW91cywgdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy50eS5jdXJyZW50LCB0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLnR5LmFtdClcbiAgICB0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLnJvdGF0aW9uLnByZXZpb3VzID0gdGhpcy5maXJzdFJBRkN5Y2xlID8gdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy5yb3RhdGlvbi5jdXJyZW50IDogbGVycCh0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLnJvdGF0aW9uLnByZXZpb3VzLCB0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLnJvdGF0aW9uLmN1cnJlbnQsIHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMucm90YXRpb24uYW10KVxuICAgIHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMuYnJpZ2h0bmVzcy5wcmV2aW91cyA9IHRoaXMuZmlyc3RSQUZDeWNsZSA/IHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMuYnJpZ2h0bmVzcy5jdXJyZW50IDogbGVycCh0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLmJyaWdodG5lc3MucHJldmlvdXMsIHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMuYnJpZ2h0bmVzcy5jdXJyZW50LCB0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLmJyaWdodG5lc3MuYW10KVxuXG4gICAgLy8gc2V0IHN0eWxlc1xuICAgIEdTQVAuc2V0KHRoaXMuRE9NLnJldmVhbCwge1xuICAgICAgeDogdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy50eC5wcmV2aW91cyxcbiAgICAgIHk6IHRoaXMuYW5pbWF0YWJsZVByb3BlcnRpZXMudHkucHJldmlvdXMsXG4gICAgICByb3RhdGlvbjogdGhpcy5hbmltYXRhYmxlUHJvcGVydGllcy5yb3RhdGlvbi5wcmV2aW91cyxcbiAgICAgIGZpbHRlcjogYGJyaWdodG5lc3MoJHt0aGlzLmFuaW1hdGFibGVQcm9wZXJ0aWVzLmJyaWdodG5lc3MucHJldmlvdXN9KWBcbiAgICB9KVxuXG4gICAgLy8gbG9vcFxuICAgIHRoaXMuZmlyc3RSQUZDeWNsZSA9IGZhbHNlXG4gICAgdGhpcy5sb29wUmVuZGVyKClcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICAvLyB1cGRhdGUgbW91c2UgcG9zaXRpb24gd2hlbiBtb3ZpbmcgdGhlIG1vdXNlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ID0+IG1vdXNlcG9zID0gZ2V0TW91c2VQb3MoZXYpKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlcilcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKCkge1xuXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEwMDE2ZDY5NTYyZGIyZTI5MGM3XCIpIl0sIm5hbWVzIjpbIm1vdXNlcG9zIiwieCIsInkiLCJtb3VzZVBvc0NhY2hlIiwiZGlyZWN0aW9uIiwiQW5pbWF0aW9uIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJlbGVtZW50Iiwic3VwZXIiLCJ0aGlzIiwiRE9NIiwiaW1hZ2UiLCJnZXRBdHRyaWJ1dGUiLCJsYXlvdXQiLCJpbml0RXZlbnRzIiwicmV2ZWFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicmV2ZWFsSW5uZXIiLCJyZXZlYWxJbWFnZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYXBwZW5kQ2hpbGQiLCJlbCIsIm9uTW91c2VFbnRlciIsInNob3dJbWFnZSIsImZpcnN0UkFGQ3ljbGUiLCJsb29wUmVuZGVyIiwib25Nb3VzZUxlYXZlIiwic3RvcFJlbmRlcmluZyIsImhpZGVJbWFnZSIsIkdTQVAiLCJ0bCIsIm9uU3RhcnQiLCJvcGFjaXR5IiwiekluZGV4IiwiaW1hZ2VzIiwibGVuZ3RoIiwidG8iLCJlYXNlIiwic3RhcnRBdCIsIm9uQ29tcGxldGUiLCJyZXF1ZXN0SWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInVuZGVmaW5lZCIsImNhbGNCb3VuZHMiLCJtb3VzZURpc3RhbmNlWCIsImNsYW1wIiwiTWF0aCIsImFicyIsImFuaW1hdGFibGVQcm9wZXJ0aWVzIiwidHgiLCJjdXJyZW50IiwiYm91bmRzIiwibGVmdCIsIndpZHRoIiwidHkiLCJ0b3AiLCJoZWlnaHQiLCJyb3RhdGlvbiIsIm1hcCIsImJyaWdodG5lc3MiLCJwcmV2aW91cyIsImxlcnAiLCJhbXQiLCJmaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImdldE1vdXNlUG9zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=