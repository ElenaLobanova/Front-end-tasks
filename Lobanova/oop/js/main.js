function noMoneyNoHoney(){
    //TODO: Find out why the amount of honey in the hive is not increasing.
    function Bee(capacity, hive) {
        this.capacity = capacity;
        this.capacity = hive;
    }

    function Hive() {
        this.pollen = 100;
    }

    Hive.prototype.addPollen = function(pollen) {
      
        this.pollen += pollen;
    }

    Hive.prototype.getPollen = function() {
        return this.pollen;
    }

    Bee.prototype.unloadPollen = function() {
        hive.addPollen(this.capacity);
    }


    var hive1 = new Hive();
    var hive2 = new Hive();

    console.log(hive1.getPollen());
    console.log(hive2.getPollen());

    var bee1 = new Bee(this,50, hive1);
    var bee2 = new Bee(100, hive1);
    var bee3 = new Bee(25, hive2);
    /**bee1.unloadPollen();
    bee2.unloadPollen();
    bee3.unloadPollen();**/

    console.log('must be 250', hive1.getPollen(this.capacity));

    console.log('must be 125', hive2.getPollen(this.capacity));
 

     
}

noMoneyNoHoney();

