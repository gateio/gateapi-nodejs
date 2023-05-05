# CrossMarginBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **string** | Available amount | [optional] [default to undefined]
**freeze** | **string** | Locked amount | [optional] [default to undefined]
**borrowed** | **string** | Borrowed amount | [optional] [default to undefined]
**interest** | **string** | Unpaid interests | [optional] [default to undefined]
**negativeLiab** | **string** | Negative Liabilities. Formula:Min[available+total+unrealized_pnl,0] | [optional] [default to undefined]
**futuresPosLiab** | **string** | Borrowing to Open Positions in Futures | [optional] [default to undefined]
**equity** | **string** | Equity. Formula: available + freeze - borrowed + total + unrealized_pnl | [optional] [default to undefined]
**totalFreeze** | **string** | Total freeze. Formula: position_initial_margin + order_margin | [optional] [default to undefined]
**totalLiab** | **string** | Total liabilities. Formula: Max[Abs[Min[quity - total_freeze,0], borrowed]] - futures_pos_liab | [optional] [default to undefined]

