<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4">
        <TaskList />
      </div>
      <div class="col">
        <ItemGroup type="currency" />
        <div class="mt-4"></div>
        <ItemGroup type="resource" />
        <div class="mt-4"></div>
        <ItemGroup type="treasure" />

        <LocationsList v-if="0" />
        <div class="py-5"></div>
        <LocationCard />

        <p>Level VII : The Top</p>
        <p>Level VI : The Gemforge</p>
        <p>Level V : The Smith</p>
        <p>Level IV : The Kitchens</p>
        <p>Level III : The Stockpile</p>
        <p>Level II : The Barracks</p>
        <p>Level I : The Forge</p>
        <p>Level 0 : The Guardian Chamber</p>
        <p>Level -I : The Dungeon</p>
        <p>Level -II : The Cellar</p>
        <p>Level -III : The Mine</p>
        <p>Level -IV : The Pit</p>
        <p>Level -V : The Tunnel</p>
        <p>Level -VI : The Deep</p>
        <p>Level -VII : The Bottom</p>

        <p>Find a Ring.</p>
        <p>Rings explode into properties</p>
        <p>Combine two rings (3 properties each)</p>
        <p>Combine Rings of Similar Tiers</p>

        <li>3 - 3 -> 4 (-2) Rare</li>
        <li>4 - 4 -> 5 (-3) Epic</li>
        <li>5 - 5 -> 6 (-4) Legendary</li>
        <li>6 - 6 -> 6 (-6) Mythic</li>

        <!-- 
          HP, Damage, Fire    Frost, HP, Damage = HP,HP,Dam,Fire
          HP,HP,Dam,Fire     Fire, Fire, Dam, HP = Hp,HP,HP, Dam, Dam
          Hp,HP,HP, Dam, Dam  Hp,Hp,Dam,DamDam = HP,Hp,Hp, Dam,Dam,Dam
        

        1 - 1 = 2

        2 - 2 = 4

        4 - 4 = 8

        Enchant for Minor (25%), Major (50%)
        Enchant of Elements (50%)/100%
        Enchant of Sword (Attack,Dam)
        Enchant of Shield (HP, Def)
        Enchant of Soul (Magic, Luck
        
        )
        -->

        <li>3 - 3 -> 3 (-3) Rare</li>
        <li>3 - 3 -> 3 (-3) Epic</li>
        <li>3 - 3 -> 4 (-2) Legendary</li>
        <li>4 - 4 -> 4 (-4) Mythic</li>

        <!-- 
          HP, Damage, Fire    Frost, HP, Damage = (HP,HP),Dam,Fire


        -->
        <p>Runes</p>
        -- Gemcutting - lost ark each gem has two stats 10 cuts either it works,
        or it doesn't. socket a gem. two gems of the same type (fuse for
        increase luck)
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from "@/components/TaskList";

import ItemGroup from "@/components/ItemGroup";
import LocationsList from "@/components/LocationsList";
import LocationCard from "@/components/LocationCard";

export default {
  name: "Main",
  components: {
    TaskList,
    ItemGroup,
    LocationsList,
    LocationCard
  }
};
</script>
