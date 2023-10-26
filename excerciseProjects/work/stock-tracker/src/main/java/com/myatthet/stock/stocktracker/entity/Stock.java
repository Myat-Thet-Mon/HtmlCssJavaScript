package com.myatthet.stock.stocktracker;

import java.util.List;

public class Stock {
    private String code;
    private String companyName;
    private String countryName;
    private List<String> marketList;
    //transaction list


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public List<String> getMarketList() {
        return marketList;
    }

    public void setMarketList(List<String> marketList) {
        this.marketList = marketList;
    }
}
