function headsRatio(n)
{
    let h=0;
    for(var i=1;i<=n;i++)
    {
        const r=Math.round(Math.random())
        if(r==1)
        {
            h++;
        }
    }
    const ratio=(h/n).toFixed(4);
    return(ratio);
}
console.log(headsRatio(10));     
console.log(headsRatio(100));    
console.log(headsRatio(10000));   
console.log(headsRatio(10000000));

