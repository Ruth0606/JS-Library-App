class Book
{
    constructor(code,title,pages,year,selctedDate)
    {
        this.Code=code;
        this.Title=title;
        this.SelctedDate =selctedDate;
        this.Pages=pages;
        this.Year=year;
     }
     searchInBook=function(str)
     {
        return this.Title.includes(str);
     }

}