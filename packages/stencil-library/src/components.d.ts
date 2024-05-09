/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustRadio {
        "checked": boolean;
        "disabled": boolean;
        "label": string;
        "name": string;
        "value": string;
    }
}
export interface CustRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCustRadioElement;
}
declare global {
    interface HTMLCustRadioElementEventMap {
        "myChange": {
    value: string;
  };
    }
    interface HTMLCustRadioElement extends Components.CustRadio, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCustRadioElementEventMap>(type: K, listener: (this: HTMLCustRadioElement, ev: CustRadioCustomEvent<HTMLCustRadioElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCustRadioElementEventMap>(type: K, listener: (this: HTMLCustRadioElement, ev: CustRadioCustomEvent<HTMLCustRadioElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCustRadioElement: {
        prototype: HTMLCustRadioElement;
        new (): HTMLCustRadioElement;
    };
    interface HTMLElementTagNameMap {
        "cust-radio": HTMLCustRadioElement;
    }
}
declare namespace LocalJSX {
    interface CustRadio {
        "checked"?: boolean;
        "disabled"?: boolean;
        "label"?: string;
        "name"?: string;
        "onMyChange"?: (event: CustRadioCustomEvent<{
    value: string;
  }>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "cust-radio": CustRadio;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cust-radio": LocalJSX.CustRadio & JSXBase.HTMLAttributes<HTMLCustRadioElement>;
        }
    }
}
