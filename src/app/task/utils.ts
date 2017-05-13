import { ElementRef } from "@angular/core";

export class Utils {
  /**
   * Polyfill for element.matches.
   * See: https://developer.mozilla.org/en/docs/Web/API/Element/matches#Polyfill
   * @param element
   */
  public static matches(element: any, selectorName: string): boolean {

    let proto: any = Element.prototype;

    var func =
      proto['matches'] ||
      proto.matchesSelector ||
      proto.mozMatchesSelector ||
      proto.msMatchesSelector ||
      proto.oMatchesSelector ||
      proto.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {
        }
        return i > -1;
      };

    return func.call(element, selectorName);
  }

  /**
   * Applies the specified css class on nativeElement
   * @param elementRef
   * @param className
   */
  public static addClass(elementRef: ElementRef, className: string) {
    if (elementRef.nativeElement.classList != undefined && elementRef.nativeElement.classList != null)
      elementRef.nativeElement.classList.add(className);
  }

  /**
   * Removes the specified class from nativeElement
   * @param elementRef
   * @param className
   */
  public static removeClass(elementRef: ElementRef, className: string) {
    if (elementRef.nativeElement.classList != undefined && elementRef.nativeElement.classList != null)
      elementRef.nativeElement.classList.remove(className);
  }
}