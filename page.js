/**
 * 分页
 * pno--当前页数
 * psize--每页显示数
**/
function goPage(pno,psize){
    var list_ul = document.getElementById("idData");
    var list_li = list_ul.getElementsByTagName("li");
    var num = list_li.length;//所有条数
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页 
    if(num/pageSize > parseInt(num/pageSize)){   
            totalPage=parseInt(num/pageSize)+1;   
       }else{   
           totalPage=parseInt(num/pageSize);   
       }   
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize+1;
       var endRow = currentPage * pageSize;
       endRow = (endRow > num)? num : endRow;  
       //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){    
        var irow = list_li[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "block";    
        }else{
            irow.style.display = "none";
        }
    }
    
	var tempStr = "<a class='totalpage'>当前第"+currentPage+"页 /共"+totalPage +"页</a>";
    if(currentPage>1){
        tempStr +="&nbsp;&nbsp;<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\">上一页</a>"
    }else{
        tempStr += "&nbsp;&nbsp;上一页";    
    }

    if(currentPage<totalPage){
        tempStr += "&nbsp;&nbsp;<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页</a>";
    }else{
        tempStr += "&nbsp;&nbsp;下一页";
    }
    document.getElementById("list_page").innerHTML = tempStr;
}
