# **Tradingview Widget App**
### [Downloads](https://github.com/ug-code/tradingview-widget-app/tree/master/releases)

Market overview widget for Windows.

Market Overview Widget provides a quick glance at the latest market activity across various sectors. 



![N|Solid](https://github.com/ug-code/tradingview-widget-app/raw/master/assets/screenshot.jpg)


## Building & running it locally:
- Clone the repo.
- cd to the directory
- install and run with `npm install && npm start`

## See widget
Market Overview Widget =>https://en.tradingview.com/widget/market-overview/
- open tradingview.json
- copy Embed code then paste
example json 
 ```
 {
  "colorTheme": "dark",
  "showChart": false,
  "locale": "tr",
  "width": "100%",
  "height": "100%",
  "largeChartUrl": "",
  "isTransparent": false,
  "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
  "plotLineColorFalling": "rgba(25, 118, 210, 1)",
  "gridLineColor": "rgba(42, 46, 57, 1)",
  "scaleFontColor": "rgba(120, 123, 134, 1)",
  "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
  "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
  "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
  "tabs": [
    {
      "title": "Forex",
      "symbols": [
        {
          "s": "BITFINEX:BTCTRY"
        },
        {
          "s": "BINANCE:BTCUSDT"
        },
        {
          "s": "XAUUSD"
        },
        {
          "s": "BIST:SODA"
        },
        {
          "s": "BIST:KRDMD"
        },
        {
          "s": "USDTRY"
        },
        {
          "s": "XAUUSD/31.1*USDTRY"
        }
      ],
      "originalTitle": "Forex"
    }
  ]
}
```

## Packaging it
-  For use from the CLI
- `npm install electron-packager -g`
- `electron-packager ./ --platform win32 --arch x64 --out releases/`

