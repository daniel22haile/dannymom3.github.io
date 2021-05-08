"use strict";

//TODO - removeDuplicates
function  removeDuplicates(list) {    
    let  hashTable = new  HashMap();   
    // every pair in each table indices  
    for (let  node  of  list) {      // same keys not mapped(no overwrite)     
        if (!hashTable.contains(node.key())) { 
            // insert into the new created hashTable   
            hashTable.put(list.key(), list.value())        
        }    
    }  
    // return every keys of pairs in each new hashtable index   
    return  hashTable.keys();  
}

//TODO - checkForSum
function  checkForSum(list, z) {   
    let  hashTable = new  HashMap(); 
    for (let  node  of  list)  { 
        // value is the second searched number          
        let  value  =  hashTable.get(z  -  node.key()); 
        // gives z when added with node.key()   
        if (value  ===  null)  {                                 
            map.put(node.key(),  node.value());       
        } else  {     
            // key is existed       
            return  true;        
        }
    }
} 