class ReadBook extends Book{
    constructor(title,code,year,pages,description,author,level,imageSrc,selctedDate) 
    {

        super(code,title,pages,year,selctedDate)
        this.Description=description;
        this.Author=author;
        this.Level=level;
        this.ImageSrc=imageSrc;
    }  
    searchInBook=function(str)
    {
        return this.Title.includes(str);//|| this.Description.includes(str)|| this.ImageSrc.includes(str);
    }
}