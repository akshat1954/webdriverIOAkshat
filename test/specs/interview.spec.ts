import ProgressBarPage from '../pageobjects/progressBar.page.js'

describe('UI Challenge 1', () => {
    it('Change the page URL, Test for scenario', async () => {
        await ProgressBarPage.open()
        await ProgressBarPage.open()
        await ProgressBarPage.clickOnStartButton()
        await ProgressBarPage.wait()
        await ProgressBarPage.clickOnStopButton()
       
    })

    it('Bug Case', async() => {
        await ProgressBarPage.openCustom('http://uitestingplayground.com/ajax ')
        await ProgressBarPage.clickAjaxButton()
        await ProgressBarPage.clickAjaxButton()
        await ProgressBarPage.waitForAjax()

        expect(await ProgressBarPage.verifyAjaxMessage()).toContain("Data loaded with AJAX get request.")
        

    })


})