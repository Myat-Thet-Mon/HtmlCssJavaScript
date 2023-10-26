package com.myatthet.stock.stocktracker;


import java.util.List;

public class Market {
    private String code;
    private String marketName;
    private String country;
    private String currency;
    private List<Stock> stockList;

    public Market(String code,String marketName,String country,String currency,List<Stock>stockList){
        this.code=code;
        this.marketName=marketName;
        this.country=country;
        this.currency=currency;
        this.stockList=stockList;
    }

}
