// TypeScript type definitions for various financial and trading indicators

type OHLCV = {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    timestamp: number;
};

type Ticker = {
    symbol: string;
    name: string;
    exchange: string;
};

type RSI = {
    value: number;
    period: number;
};

type MACD = {
    macdLine: number;
    signalLine: number;
    histogram: number;
};

type BollingerBands = {
    upperBand: number;
    lowerBand: number;
    middleBand: number;
};

type ATR = {
    value: number;
    period: number;
};

type SupportResistance = {
    support: number;
    resistance: number;
};

type PivotPoints = {
    support1: number;
    support2: number;
    resistance1: number;
    resistance2: number;
    pivot: number;
};

type Trendline = {
    startPoint: { x: number; y: number; };
    endPoint: { x: number; y: number; };
};

type CandlestickPattern = {
    patternName: string;
    patternType: string;
};

type TechnicalIndicators = {
    rsi: RSI;
    macd: MACD;
    bollingerBands: BollingerBands;
    atr: ATR;
};

type MarketStructure = {
    higherHighs: number;
    higherLows: number;
    lowerHighs: number;
    lowerLows: number;
};

type ScoringResult = {
    score: number;
    rationale: string;
};

type Timeframe = {
    duration: string;
    interval: string;
};
