var billboard = require("billboard-top-100").getChart;

x = "2017-01-07";
x = "2016-01-02";                                          
x = "2015-01-03";                                          
x = "2014-01-04";                                          
x = "2013-01-05";                                          
x = "2012-01-07";                                          
x = "2011-01-01";                                          
x = "2010-01-02";                                          
x = "2009-01-03";                                          
x = "2008-01-05";                                          
x = "2007-01-06";                                          
x = "2006-01-07";                                          
x = "2005-01-01";                                          
x = "2004-01-03";                                          
x = "2003-01-04";                                          
x = "2002-01-05";                                          
x = "2001-01-06";                                          
x = "2000-01-01";                                          
x = "1999-01-02";                                          
x = "1998-01-03";                                          
x = "1997-01-04"; 

billboard('pop-songs', x, function(songs, err){
        if (err) console.log(err);
        console.log("pop-songs");
        for (i = 0; i < 100; i++) {
            console.log(songs[i].title + ",");
        }
    });

