import Page from './page.js'

class ProgressBarPage extends Page {

    open () {
        return browser.url("http://uitestingplayground.com/progressbar")
    }

    openCustom(customUrl : string){
        return browser.url(customUrl)
    }

    async wait(){
        const elem = await $('#progressBar')
        await elem.waitUntil(async function () {
            return (await elem.getAttribute('aria-valuenow')) === '75'
        }, {
            timeout: 30000,
            timeoutMsg: 'progress bar to be different than 75'
        })
    }

    async waitForAjax(){
        const elem = await $('#content')
        await elem.waitUntil(async function () {
            return (await elem.getText()) === 'Data loaded with AJAX get request.'
        }, {
            timeout: 20000,
            timeoutMsg: 'timed out after 20 seconds'
        })
    }

    async verifyAjaxMessage(){
    const elem = await $('.bg-success')
    return await elem.getText()
    }

    clickAjaxButton() {
        $('#ajaxButton').click()
    }

    async clickOnStartButton() {
        await $('#startButton').click()
    }

    async clickOnStopButton() {
        await $('#stopButton').click()
    }
}

export default new ProgressBarPage()
