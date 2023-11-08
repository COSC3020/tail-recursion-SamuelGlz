function fibTailRec (number, a = 1, b = 0){
    if (number == 0) {
        return b
    } else {
        return fibTailRec((number - 1), (a + b) , a)
    }
}