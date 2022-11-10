import React from 'react';
import p1 from '../../../Assets/pictures/images1.jpeg'
import p2 from '../../../Assets/pictures/images-2.jpeg'
import p3 from '../../../Assets/pictures/images3.jpeg'
import p4 from '../../../Assets/pictures/images4.jpeg'
import p5 from '../../../Assets/pictures/images5.jpeg'
import p6 from '../../../Assets/pictures/images6.jpeg'


const SampleWorks = () => {
    return (
    <div>
        <h2 className=" text-center text-5xl font-semibold m-12 pb-1 ">Sample Photographs</h2>
        <div class="flex ...">
  <img src={p1} alt='' className="w-1/2 h-60 pt-2 pb-3 pr-3 pl-3"></img>
  <img src={p2} alt='' class="w-1/2 h-60 p-3 "></img>
</div>
<div class="flex ...">
  <img src={p3} alt='' class="w-2/5 h-60 p-3"></img>
  <img src={p4} alt='' class="w-3/5 h-60 p-3"></img>
</div>
<div class="flex ...">
  <img src={p5} alt='' class="w-1/3 h-60 p-3"></img>
  <img src={p6} alt='' class="w-2/3 h-60 p-3"></img>
</div>
</div>

    );
};

export default SampleWorks;