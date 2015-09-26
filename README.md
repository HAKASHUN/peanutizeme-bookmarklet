# Peanutizeme Bookmarklet

Get your peanutizeme with transparency.

Just add the bookmarklet below to your bookmarks bar.

```javascript
javascript:(function()%7Bvar%20stage%20%3D%20document.getElementById(%22stage%22)%3Bvar%20downloadButtonEl%20%3D%20document.getElementById(%22getYourPeanutizeme-Button%22)%3Bvar%20name%20%3D%20prompt(%22What%20is%20his%2Fher%20name%3F%22)%3Bif%20(!downloadButtonEl)%20%7BdownloadButtonEl%20%3D%20document.createElement(%22a%22)%3BdownloadButtonEl.textContent%20%3D%20%22DOWNLOAD%22%3BdownloadButtonEl.id%20%3D%20%22getYourPeanutizeme-Button%22%3BdownloadButtonEl.className%20%3D%20%22download%20circle-button%22%3BdownloadButtonEl.style.position%20%3D%20%22absolute%22%3BdownloadButtonEl.style.width%20%3D%20downloadButtonEl.style.height%20%3D%20%2290px%22%3BdownloadButtonEl.style.top%20%3D%20%22300px%22%3BdownloadButtonEl.style.right%20%3D%20%2252px%22%3BdownloadButtonEl.style.fontSize%20%3D%20%2214px%22%3BdownloadButtonEl.style.lineHeight%20%3D%20%2290px%22%3BdownloadButtonEl.style.color%20%3D%20%22%2357A4D8%22%3Bvar%20creatorSectionEl%20%3D%20document.querySelectorAll(%22.creator-section%22)%5B0%5D%3BcreatorSectionEl.appendChild(downloadButtonEl)%3B%7DdownloadButtonEl.download%20%3D%20%20name%20%2B%20%22.png%22%3BdownloadButtonEl.href%20%3D%20stage.toDataURL()%7D)()
```

## Usage

1. Once your work is done , please move to "skin" screen again.

<img width="400" alt="2015-09-26 10 53 13" src="https://cloud.githubusercontent.com/assets/1150412/10117947/09a002b4-64a4-11e5-8384-a1cfbea84cec.png">

2. When you click on the bookmarklet, it'll give you a text prompt. Type in his/her name, and hit return. You'll get a "DOWNLOAD" Button!

<img width="400" alt="_2015-09-26_ 11_00_02" src="https://cloud.githubusercontent.com/assets/1150412/10117892/6aaf90d0-64a2-11e5-9598-dcc92e386f33.png">

3. Clicking "DOWNLOAD" button, you can download.

<img width="400" src="https://cloud.githubusercontent.com/assets/1150412/10117917/585b5878-64a3-11e5-8bd0-0e59fd2df7ea.png" />

4. If you have to edit something , please run the bookmarklet again.

## Works In

I've currently confirmed only in Chrome.

