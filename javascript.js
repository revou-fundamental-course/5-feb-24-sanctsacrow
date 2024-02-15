function ftof()
{
    c=document.getElementById('txtc').value;
    //alert(c);
    if (isNaN(c)||c=='') 
    {
        alert("Harus isi angka");
        document.getElementById('txtc').value=0;
        
    }
    else{
        tof=(eval(c)/5*9)+32;
        document.getElementById('txtf').value=tof;
    }
}
function ftoc()
{
    f=document.getElementById('txtf').value;
    if (isNaN(f)||f=='') 
    {
        alert("Harus isi angka");
        document.getElementById('txtf').value=0;
       
    }
    else
    {
        toc=(eval(f)-32)/9*5;
        document.getElementById('txtc').value=toc;

    }
}
function fclear()
{
    document.getElementById('txtc').value='';
    document.getElementById('txtf').value='';
}