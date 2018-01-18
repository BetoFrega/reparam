type ICodeceptCallback = (i: CodeceptJS.I, ...pageObjects) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;

declare interface Scenario {
    (name: string, callback: ICodeceptCallback): void;

    only: (name: string, callback: ICodeceptCallback) => void;
}

declare const Before: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: Function) => void;

declare namespace CodeceptJS {
    export interface I {
        defineTimeout: (timeouts) => any;
        amOnPage: (url: string) => any;
        rightClick: (locator: string) => any;
        fillField: (field: string, value: string) => any;
        appendField: (field: string, value: string) => any;
        selectOption: (select, option) => any;
        attachFile: (locator: string, pathToFile) => any;
        checkOption: (field: string, context) => any;
        grabTextFrom: (locator: string) => any;
        grabHTMLFrom: (locator: string) => any;
        grabValueFrom: (locator: string) => any;
        grabAttributeFrom: (locator: string, attr) => any;
        seeInTitle: (text: string) => any;
        dontSeeInTitle: (text: string) => any;
        grabTitle: () => any;
        see: (text: string, context) => any;
        dontSee: (text: string, context) => any;
        seeInField: (field: string, value: string) => any;
        dontSeeInField: (field: string, value: string) => any;
        seeCheckboxIsChecked: (field) => any;
        dontSeeCheckboxIsChecked: (field) => any;
        seeElement: (locator: string) => any;
        dontSeeElement: (locator: string) => any;
        seeElementInDOM: (locator: string) => any;
        dontSeeElementInDOM: (locator: string) => any;
        seeInSource: (text: string) => any;
        dontSeeInSource: (text: string) => any;
        seeNumberOfElements: (selector, num) => any;
        seeInCurrentUrl: (url) => any;
        dontSeeInCurrentUrl: (url) => any;
        seeCurrentUrlEquals: (url) => any;
        dontSeeCurrentUrlEquals: (url) => any;
        executeScript: (fn) => any;
        executeAsyncScript: (fn) => any;
        scrollTo: (locator: string, offsetX: number, offsetY: number) => any;
        moveCursorTo: (locator: string, offsetX: number, offsetY: number) => any;
        saveScreenshot: (fileName) => any;
        setCookie: (cookie) => any;
        clearCookie: (cookie) => any;
        clearField: (locator: string) => any;
        seeCookie: (name) => any;
        dontSeeCookie: (name) => any;
        grabCookie: (name) => any;
        acceptPopup: () => any;
        cancelPopup: () => any;
        seeInPopup: (text: string) => any;
        pressKey: (key) => any;
        resizeWindow: (width: number | 'maximize', height: number) => any;
        waitForElement: (locator: string, seconds?: number) => void,
        wait: (seconds: number) => void
    }
}

declare module 'codeceptjs' {
    export = CodeceptJS;
}