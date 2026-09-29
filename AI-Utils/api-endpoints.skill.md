# API Endpoints Reference (Restful-Booker)

Base URL: `https://restful-booker.herokuapp.com`

## Endpoints used under `tests/`

| Method | Endpoint | Used In | Params / Body | Notes |
|---|---|---|---|---|
| GET | `/booking` | [tests/ApiTestingGet.spec.ts](../tests/ApiTestingGet.spec.ts) | — | Returns list of all booking ids |
| GET | `/booking/{id}` | [tests/ApiTestingGet.spec.ts](../tests/ApiTestingGet.spec.ts) | `id` (path) — e.g. `1` | Returns single booking details |
| POST | `/booking` | [tests/ApiTestingPost.spec.ts](../tests/ApiTestingPost.spec.ts) | `firstname` (string), `lastname` (string), `totalprice` (number), `depositpaid` (boolean), `bookingdates.checkin` (date), `bookingdates.checkout` (date), `additionalneeds` (string) | Creates a new booking |
| POST | `/booking` | [tests/APITestingWithParseData.spec.ts](../tests/APITestingWithParseData.spec.ts) | Body loaded from [TestData/apidata.json](../TestData/apidata.json): `firstname`, `lastname`, `totalprice`, `depositpaid`, `bookingdates.checkin`, `bookingdates.checkout`, `additionalneeds` | Creates booking from external JSON test data |

## Booking body schema

| Field | Type | Example |
|---|---|---|
| firstname | string | "Harsh" |
| lastname | string | "Vardhan" |
| totalprice | number | 999 |
| depositpaid | boolean | true |
| bookingdates.checkin | date (YYYY-MM-DD) | "2026-09-26" |
| bookingdates.checkout | date (YYYY-MM-DD) | "2026-10-04" |
| additionalneeds | string | "Breakfast" |

## Environment

| File | Purpose |
|---|---|
| [env-files/.env.dev](../env-files/.env.dev) | `URL`, `USERNAME`, `PASSWORD` for dev env |
| [env-files/.env.uat](../env-files/.env.uat) | `URL`, `USERNAME`, `PASSWORD` for uat env |
