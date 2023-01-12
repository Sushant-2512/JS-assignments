var object1={

    object2:
    {
         object3:7
    }
}

var object4=object1

//at this memory can't be released because object4 refering to it
object1=1

//here the memory is released because nothing is refering to it
object4=2