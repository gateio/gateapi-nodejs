# MyFuturesTradeTimeRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tradeId** | **string** | Fill ID | [optional] [default to undefined]
**createTime** | **number** | Fill Time | [optional] [default to undefined]
**contract** | **string** | Futures contract | [optional] [default to undefined]
**orderId** | **string** | Related order ID | [optional] [default to undefined]
**size** | **number** | Trading size | [optional] [default to undefined]
**closeSize** | **number** | Number of closed positions:  close_size&#x3D;0 &amp;&amp; size＞0 Open long position close_size&#x3D;0 &amp;&amp; size＜0 Open short position close_size&gt;0 &amp;&amp; size&gt;0 &amp;&amp; size &lt;&#x3D; close_size Close short position close_size&gt;0 &amp;&amp; size&gt;0 &amp;&amp; size &gt; close_size Close short position and open long position close_size&lt;0 &amp;&amp; size&lt;0 &amp;&amp; size &gt;&#x3D; close_size Close long position close_size&lt;0 &amp;&amp; size&lt;0 &amp;&amp; size &lt; close_size Close long position and open short position | [optional] [default to undefined]
**price** | **string** | Fill Price | [optional] [default to undefined]
**role** | **string** | Trade role. taker - taker, maker - maker | [optional] [default to undefined]
**text** | **string** | Order custom information | [optional] [default to undefined]
**fee** | **string** | Trade fee | [optional] [default to undefined]
**pointFee** | **string** | Points used to deduct trade fee | [optional] [default to undefined]

## Enum: MyFuturesTradeTimeRange.Role

* `Taker` (value: `'taker'`)

* `Maker` (value: `'maker'`)


