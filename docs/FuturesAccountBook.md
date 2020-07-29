# GateApi.FuturesAccountBook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **number** | Change time | [optional] [default to undefined]
**change** | **string** | Change amount | [optional] [default to undefined]
**balance** | **string** | Balance after change | [optional] [default to undefined]
**type** | **string** | Changing Type: - dnw: Deposit &amp; Withdraw - pnl: Profit &amp; Loss by reducing position - fee: Trading fee - refr: Referrer rebate - fund: Funding - point_dnw: POINT Deposit &amp; Withdraw - point_fee: POINT Trading fee - point_refr: POINT Referrer rebate | [optional] [default to undefined]
**text** | **string** | Comment | [optional] [default to undefined]

## Enum: FuturesAccountBook.Type

* `Dnw` (value: `'dnw'`)

* `Pnl` (value: `'pnl'`)

* `Fee` (value: `'fee'`)

* `Refr` (value: `'refr'`)

* `Fund` (value: `'fund'`)

* `PointDnw` (value: `'point_dnw'`)

* `PointFee` (value: `'point_fee'`)

* `PointRefr` (value: `'point_refr'`)


