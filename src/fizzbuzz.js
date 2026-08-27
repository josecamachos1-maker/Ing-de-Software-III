function fizzbuzz(num)
{
    if(num%3 == 0)
    {
        num = "Fizz"
    }
    else
        if(num%5 == 0)
        {
            num = "Buzz"
        }
    return num + "";
}

export {fizzbuzz};