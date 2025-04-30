import { useParams, useNavigate } from 'react-router-dom';
import './index.scss'; // optional styling
import { useEffect,useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';


const blogPosts = [
  {
    id: 1,
    title: 'Why I Built This Portfolio',
    date: 'April 28, 2025',
    image: '/images/blogs/react.png',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacus et tellus eleifend, vel dignissim neque laoreet. Integer et sagittis nisl. Phasellus hendrerit, sapien at dapibus vehicula, nisl erat fermentum felis, in rhoncus eros lorem non metus. Etiam facilisis, nulla eu efficitur blandit, risus magna tristique nibh, sit amet scelerisque libero lectus id sapien. In hac habitasse platea dictumst. Pellentesque porttitor purus ac feugiat rutrum. Etiam fermentum tortor nulla, vitae efficitur metus ornare at. Sed nec commodo lacus. Duis lacinia imperdiet enim, a accumsan sapien tincidunt id. Nullam semper dignissim mi, nec volutpat odio commodo sed.
    
    Donec nec porttitor metus. Pellentesque sodales finibus vehicula. Nulla facilisi. Proin eget tincidunt nisl. Curabitur dignissim sapien id ipsum feugiat pretium. Nulla at convallis justo. Vivamus sed urna eu lectus varius dignissim nec ut justo. Vestibulum porttitor efficitur erat, a vulputate felis euismod in. Aenean tempor metus nec ex gravida congue. Morbi in felis a turpis fermentum bibendum. Pellentesque vitae ipsum felis. Aliquam erat volutpat. Vivamus id lacus ac sem feugiat pulvinar nec id dolor.
    
    Aliquam erat volutpat. Morbi fringilla justo non nisi gravida tincidunt. Nam gravida libero vel nisi luctus, sit amet blandit est porttitor. Integer porttitor vestibulum dolor sed lacinia. Proin fringilla leo nec diam aliquam dapibus. Etiam semper urna sed ipsum euismod imperdiet. In hac habitasse platea dictumst. Vestibulum fermentum feugiat lorem, in imperdiet sapien tempor sit amet. Aenean accumsan tempor leo ac rhoncus. Cras gravida nulla et nulla fermentum, at convallis turpis faucibus.
    
    Nunc sit amet lectus imperdiet, convallis metus et, imperdiet risus. Mauris vitae sem eu metus facilisis lobortis at a purus. Integer vel imperdiet tellus. Proin vulputate diam nec neque lacinia, vel efficitur justo tempor. Proin cursus tincidunt diam, ac imperdiet lorem laoreet sed. Etiam egestas blandit libero, eget dignissim ligula egestas id. Pellentesque porttitor leo at nulla sodales, ut gravida nulla tincidunt.
    
    Cras pulvinar euismod gravida. Sed porta tellus leo, sit amet egestas elit sagittis a. Quisque a nulla dignissim, tincidunt justo vel, iaculis tortor. Duis sodales rutrum nisl, vel laoreet mi egestas nec. Nunc nec justo risus. Maecenas dapibus, diam id luctus porttitor, lacus nunc vehicula lorem, nec viverra sapien quam id dolor. Maecenas laoreet magna lorem, a hendrerit sapien scelerisque ac. Morbi gravida nisi sed massa mattis, ac blandit sapien dapibus.
    
    Sed commodo felis in lacus feugiat, at viverra purus tincidunt. Suspendisse potenti. Duis cursus, lacus ac facilisis posuere, metus metus tincidunt lorem, sed feugiat ex augue nec orci. Aenean vestibulum nunc ut ex bibendum gravida. Nunc luctus magna ac turpis rhoncus maximus. In lobortis luctus velit. Sed varius ex sit amet massa efficitur, non elementum justo luctus. Fusce nec elit libero. Pellentesque tristique eros at orci tincidunt blandit. Pellentesque id magna nulla. Pellentesque et lectus quam. Pellentesque id elit nec ligula sollicitudin pretium. Aliquam erat volutpat. Sed imperdiet tortor nec turpis dignissim, non iaculis est semper. Etiam at vestibulum enim, non vestibulum odio.
    
    Integer eget bibendum nulla. Suspendisse faucibus elit a arcu fermentum, ut congue velit congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur, nulla nec mattis tristique, augue ex porttitor arcu, vitae feugiat justo est at sapien. Nullam suscipit odio vitae nunc porta, nec tincidunt erat congue. Nunc sed turpis justo. Sed a orci malesuada, volutpat magna sed, tincidunt sapien. Integer nec mi nec odio ornare blandit. Sed varius lorem justo, sed maximus ex sagittis eget. Vivamus scelerisque vehicula ex id dapibus. Vestibulum nec massa at orci viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sodales erat nec arcu placerat imperdiet. Vestibulum sed lacus in ligula feugiat sodales. Nunc nec libero eros. Phasellus sed elit eu elit faucibus bibendum sed a ante.
    
    Suspendisse feugiat ligula a felis sagittis dapibus. Sed vitae imperdiet diam. Aenean finibus sollicitudin purus a rhoncus. Quisque pharetra felis nec velit tincidunt, nec scelerisque massa placerat. Mauris varius lectus quis lacus volutpat, nec efficitur ligula tempor. Integer quis ante volutpat, placerat arcu at, volutpat nulla. Proin accumsan felis metus, nec lacinia risus malesuada nec. Nullam nec sem et enim imperdiet laoreet. Curabitur nec diam in tortor ultrices mattis. Suspendisse potenti. Cras vestibulum, purus et gravida cursus, lacus nisl imperdiet dolor, in iaculis leo sapien sed diam.
    
    Aenean bibendum magna in risus blandit, vel posuere tortor tincidunt. Pellentesque eget sem viverra, congue lorem id, pretium augue. Mauris sollicitudin sem vel mauris tincidunt, nec aliquam orci tempor. Pellentesque blandit ante vitae diam scelerisque, ut lacinia eros suscipit. Integer mollis magna at sem fermentum finibus. Donec rutrum erat quis dolor congue, nec varius tellus scelerisque. Aliquam congue, tortor nec faucibus mattis, ex erat porttitor nunc, in dignissim sem magna ac enim. Aliquam erat volutpat. Sed eu lorem non magna imperdiet laoreet. Nulla porta rutrum nulla, nec tincidunt nulla malesuada vel. Donec fermentum felis eget eros fringilla maximus. Mauris scelerisque accumsan augue vel iaculis.
    
    Curabitur ut posuere lorem, nec viverra nulla. Nullam id blandit augue. Curabitur pulvinar eleifend sodales. Integer dignissim sapien at ante feugiat, in gravida sapien fringilla. Suspendisse iaculis blandit augue sed facilisis. Morbi dapibus justo eu urna facilisis convallis. Vivamus finibus sollicitudin sapien, sit amet fermentum elit. Sed id nisi in nunc ullamcorper dictum. Proin id malesuada mi, nec volutpat dolor. Sed fermentum velit in magna tempor, sed accumsan nisi volutpat.`
    } ,
  
  {
      id: 2,
      title: 'Working with React and SCSS',
      date: 'April 25, 2025',
      image: '/images/blogs/react.png',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacus et tellus eleifend, vel dignissim neque laoreet. Integer et sagittis nisl. Phasellus hendrerit, sapien at dapibus vehicula, nisl erat fermentum felis, in rhoncus eros lorem non metus. Etiam facilisis, nulla eu efficitur blandit, risus magna tristique nibh, sit amet scelerisque libero lectus id sapien. In hac habitasse platea dictumst. Pellentesque porttitor purus ac feugiat rutrum. Etiam fermentum tortor nulla, vitae efficitur metus ornare at. Sed nec commodo lacus. Duis lacinia imperdiet enim, a accumsan sapien tincidunt id. Nullam semper dignissim mi, nec volutpat odio commodo sed.
    
    Donec nec porttitor metus. Pellentesque sodales finibus vehicula. Nulla facilisi. Proin eget tincidunt nisl. Curabitur dignissim sapien id ipsum feugiat pretium. Nulla at convallis justo. Vivamus sed urna eu lectus varius dignissim nec ut justo. Vestibulum porttitor efficitur erat, a vulputate felis euismod in. Aenean tempor metus nec ex gravida congue. Morbi in felis a turpis fermentum bibendum. Pellentesque vitae ipsum felis. Aliquam erat volutpat. Vivamus id lacus ac sem feugiat pulvinar nec id dolor.
    
    Aliquam erat volutpat. Morbi fringilla justo non nisi gravida tincidunt. Nam gravida libero vel nisi luctus, sit amet blandit est porttitor. Integer porttitor vestibulum dolor sed lacinia. Proin fringilla leo nec diam aliquam dapibus. Etiam semper urna sed ipsum euismod imperdiet. In hac habitasse platea dictumst. Vestibulum fermentum feugiat lorem, in imperdiet sapien tempor sit amet. Aenean accumsan tempor leo ac rhoncus. Cras gravida nulla et nulla fermentum, at convallis turpis faucibus.
    
    Nunc sit amet lectus imperdiet, convallis metus et, imperdiet risus. Mauris vitae sem eu metus facilisis lobortis at a purus. Integer vel imperdiet tellus. Proin vulputate diam nec neque lacinia, vel efficitur justo tempor. Proin cursus tincidunt diam, ac imperdiet lorem laoreet sed. Etiam egestas blandit libero, eget dignissim ligula egestas id. Pellentesque porttitor leo at nulla sodales, ut gravida nulla tincidunt.
    
    Cras pulvinar euismod gravida. Sed porta tellus leo, sit amet egestas elit sagittis a. Quisque a nulla dignissim, tincidunt justo vel, iaculis tortor. Duis sodales rutrum nisl, vel laoreet mi egestas nec. Nunc nec justo risus. Maecenas dapibus, diam id luctus porttitor, lacus nunc vehicula lorem, nec viverra sapien quam id dolor. Maecenas laoreet magna lorem, a hendrerit sapien scelerisque ac. Morbi gravida nisi sed massa mattis, ac blandit sapien dapibus.
    
    Sed commodo felis in lacus feugiat, at viverra purus tincidunt. Suspendisse potenti. Duis cursus, lacus ac facilisis posuere, metus metus tincidunt lorem, sed feugiat ex augue nec orci. Aenean vestibulum nunc ut ex bibendum gravida. Nunc luctus magna ac turpis rhoncus maximus. In lobortis luctus velit. Sed varius ex sit amet massa efficitur, non elementum justo luctus. Fusce nec elit libero. Pellentesque tristique eros at orci tincidunt blandit. Pellentesque id magna nulla. Pellentesque et lectus quam. Pellentesque id elit nec ligula sollicitudin pretium. Aliquam erat volutpat. Sed imperdiet tortor nec turpis dignissim, non iaculis est semper. Etiam at vestibulum enim, non vestibulum odio.
    
    Integer eget bibendum nulla. Suspendisse faucibus elit a arcu fermentum, ut congue velit congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur, nulla nec mattis tristique, augue ex porttitor arcu, vitae feugiat justo est at sapien. Nullam suscipit odio vitae nunc porta, nec tincidunt erat congue. Nunc sed turpis justo. Sed a orci malesuada, volutpat magna sed, tincidunt sapien. Integer nec mi nec odio ornare blandit. Sed varius lorem justo, sed maximus ex sagittis eget. Vivamus scelerisque vehicula ex id dapibus. Vestibulum nec massa at orci viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sodales erat nec arcu placerat imperdiet. Vestibulum sed lacus in ligula feugiat sodales. Nunc nec libero eros. Phasellus sed elit eu elit faucibus bibendum sed a ante.
    
    Suspendisse feugiat ligula a felis sagittis dapibus. Sed vitae imperdiet diam. Aenean finibus sollicitudin purus a rhoncus. Quisque pharetra felis nec velit tincidunt, nec scelerisque massa placerat. Mauris varius lectus quis lacus volutpat, nec efficitur ligula tempor. Integer quis ante volutpat, placerat arcu at, volutpat nulla. Proin accumsan felis metus, nec lacinia risus malesuada nec. Nullam nec sem et enim imperdiet laoreet. Curabitur nec diam in tortor ultrices mattis. Suspendisse potenti. Cras vestibulum, purus et gravida cursus, lacus nisl imperdiet dolor, in iaculis leo sapien sed diam.
    
    Aenean bibendum magna in risus blandit, vel posuere tortor tincidunt. Pellentesque eget sem viverra, congue lorem id, pretium augue. Mauris sollicitudin sem vel mauris tincidunt, nec aliquam orci tempor. Pellentesque blandit ante vitae diam scelerisque, ut lacinia eros suscipit. Integer mollis magna at sem fermentum finibus. Donec rutrum erat quis dolor congue, nec varius tellus scelerisque. Aliquam congue, tortor nec faucibus mattis, ex erat porttitor nunc, in dignissim sem magna ac enim. Aliquam erat volutpat. Sed eu lorem non magna imperdiet laoreet. Nulla porta rutrum nulla, nec tincidunt nulla malesuada vel. Donec fermentum felis eget eros fringilla maximus. Mauris scelerisque accumsan augue vel iaculis.
    
    Curabitur ut posuere lorem, nec viverra nulla. Nullam id blandit augue. Curabitur pulvinar eleifend sodales. Integer dignissim sapien at ante feugiat, in gravida sapien fringilla. Suspendisse iaculis blandit augue sed facilisis. Morbi dapibus justo eu urna facilisis convallis. Vivamus finibus sollicitudin sapien, sit amet fermentum elit. Sed id nisi in nunc ullamcorper dictum. Proin id malesuada mi, nec volutpat dolor. Sed fermentum velit in magna tempor, sed accumsan nisi volutpat.`
    } 
  ,
  {
    id: 3,
    title: 'Tips for Clean JavaScript Code',
    date: 'April 20, 2025',
    image: '/images/blogs/react.png',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacus et tellus eleifend, vel dignissim neque laoreet. Integer et sagittis nisl. Phasellus hendrerit, sapien at dapibus vehicula, nisl erat fermentum felis, in rhoncus eros lorem non metus. Etiam facilisis, nulla eu efficitur blandit, risus magna tristique nibh, sit amet scelerisque libero lectus id sapien. In hac habitasse platea dictumst. Pellentesque porttitor purus ac feugiat rutrum. Etiam fermentum tortor nulla, vitae efficitur metus ornare at. Sed nec commodo lacus. Duis lacinia imperdiet enim, a accumsan sapien tincidunt id. Nullam semper dignissim mi, nec volutpat odio commodo sed.
    
    Donec nec porttitor metus. Pellentesque sodales finibus vehicula. Nulla facilisi. Proin eget tincidunt nisl. Curabitur dignissim sapien id ipsum feugiat pretium. Nulla at convallis justo. Vivamus sed urna eu lectus varius dignissim nec ut justo. Vestibulum porttitor efficitur erat, a vulputate felis euismod in. Aenean tempor metus nec ex gravida congue. Morbi in felis a turpis fermentum bibendum. Pellentesque vitae ipsum felis. Aliquam erat volutpat. Vivamus id lacus ac sem feugiat pulvinar nec id dolor.
    
    Aliquam erat volutpat. Morbi fringilla justo non nisi gravida tincidunt. Nam gravida libero vel nisi luctus, sit amet blandit est porttitor. Integer porttitor vestibulum dolor sed lacinia. Proin fringilla leo nec diam aliquam dapibus. Etiam semper urna sed ipsum euismod imperdiet. In hac habitasse platea dictumst. Vestibulum fermentum feugiat lorem, in imperdiet sapien tempor sit amet. Aenean accumsan tempor leo ac rhoncus. Cras gravida nulla et nulla fermentum, at convallis turpis faucibus.
    
    Nunc sit amet lectus imperdiet, convallis metus et, imperdiet risus. Mauris vitae sem eu metus facilisis lobortis at a purus. Integer vel imperdiet tellus. Proin vulputate diam nec neque lacinia, vel efficitur justo tempor. Proin cursus tincidunt diam, ac imperdiet lorem laoreet sed. Etiam egestas blandit libero, eget dignissim ligula egestas id. Pellentesque porttitor leo at nulla sodales, ut gravida nulla tincidunt.
    
    Cras pulvinar euismod gravida. Sed porta tellus leo, sit amet egestas elit sagittis a. Quisque a nulla dignissim, tincidunt justo vel, iaculis tortor. Duis sodales rutrum nisl, vel laoreet mi egestas nec. Nunc nec justo risus. Maecenas dapibus, diam id luctus porttitor, lacus nunc vehicula lorem, nec viverra sapien quam id dolor. Maecenas laoreet magna lorem, a hendrerit sapien scelerisque ac. Morbi gravida nisi sed massa mattis, ac blandit sapien dapibus.
    
    Sed commodo felis in lacus feugiat, at viverra purus tincidunt. Suspendisse potenti. Duis cursus, lacus ac facilisis posuere, metus metus tincidunt lorem, sed feugiat ex augue nec orci. Aenean vestibulum nunc ut ex bibendum gravida. Nunc luctus magna ac turpis rhoncus maximus. In lobortis luctus velit. Sed varius ex sit amet massa efficitur, non elementum justo luctus. Fusce nec elit libero. Pellentesque tristique eros at orci tincidunt blandit. Pellentesque id magna nulla. Pellentesque et lectus quam. Pellentesque id elit nec ligula sollicitudin pretium. Aliquam erat volutpat. Sed imperdiet tortor nec turpis dignissim, non iaculis est semper. Etiam at vestibulum enim, non vestibulum odio.
    
    Integer eget bibendum nulla. Suspendisse faucibus elit a arcu fermentum, ut congue velit congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur, nulla nec mattis tristique, augue ex porttitor arcu, vitae feugiat justo est at sapien. Nullam suscipit odio vitae nunc porta, nec tincidunt erat congue. Nunc sed turpis justo. Sed a orci malesuada, volutpat magna sed, tincidunt sapien. Integer nec mi nec odio ornare blandit. Sed varius lorem justo, sed maximus ex sagittis eget. Vivamus scelerisque vehicula ex id dapibus. Vestibulum nec massa at orci viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sodales erat nec arcu placerat imperdiet. Vestibulum sed lacus in ligula feugiat sodales. Nunc nec libero eros. Phasellus sed elit eu elit faucibus bibendum sed a ante.
    
    Suspendisse feugiat ligula a felis sagittis dapibus. Sed vitae imperdiet diam. Aenean finibus sollicitudin purus a rhoncus. Quisque pharetra felis nec velit tincidunt, nec scelerisque massa placerat. Mauris varius lectus quis lacus volutpat, nec efficitur ligula tempor. Integer quis ante volutpat, placerat arcu at, volutpat nulla. Proin accumsan felis metus, nec lacinia risus malesuada nec. Nullam nec sem et enim imperdiet laoreet. Curabitur nec diam in tortor ultrices mattis. Suspendisse potenti. Cras vestibulum, purus et gravida cursus, lacus nisl imperdiet dolor, in iaculis leo sapien sed diam.
    
    Aenean bibendum magna in risus blandit, vel posuere tortor tincidunt. Pellentesque eget sem viverra, congue lorem id, pretium augue. Mauris sollicitudin sem vel mauris tincidunt, nec aliquam orci tempor. Pellentesque blandit ante vitae diam scelerisque, ut lacinia eros suscipit. Integer mollis magna at sem fermentum finibus. Donec rutrum erat quis dolor congue, nec varius tellus scelerisque. Aliquam congue, tortor nec faucibus mattis, ex erat porttitor nunc, in dignissim sem magna ac enim. Aliquam erat volutpat. Sed eu lorem non magna imperdiet laoreet. Nulla porta rutrum nulla, nec tincidunt nulla malesuada vel. Donec fermentum felis eget eros fringilla maximus. Mauris scelerisque accumsan augue vel iaculis.
    
    Curabitur ut posuere lorem, nec viverra nulla. Nullam id blandit augue. Curabitur pulvinar eleifend sodales. Integer dignissim sapien at ante feugiat, in gravida sapien fringilla. Suspendisse iaculis blandit augue sed facilisis. Morbi dapibus justo eu urna facilisis convallis. Vivamus finibus sollicitudin sapien, sit amet fermentum elit. Sed id nisi in nunc ullamcorper dictum. Proin id malesuada mi, nec volutpat dolor. Sed fermentum velit in magna tempor, sed accumsan nisi volutpat.`
    } ,
  {
    id: 4,
    title: 'Designing for Developers',
    date: 'April 18, 2025',
    image: '/images/blogs/react.png',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacus et tellus eleifend, vel dignissim neque laoreet. Integer et sagittis nisl. Phasellus hendrerit, sapien at dapibus vehicula, nisl erat fermentum felis, in rhoncus eros lorem non metus. Etiam facilisis, nulla eu efficitur blandit, risus magna tristique nibh, sit amet scelerisque libero lectus id sapien. In hac habitasse platea dictumst. Pellentesque porttitor purus ac feugiat rutrum. Etiam fermentum tortor nulla, vitae efficitur metus ornare at. Sed nec commodo lacus. Duis lacinia imperdiet enim, a accumsan sapien tincidunt id. Nullam semper dignissim mi, nec volutpat odio commodo sed.
    
    Donec nec porttitor metus. Pellentesque sodales finibus vehicula. Nulla facilisi. Proin eget tincidunt nisl. Curabitur dignissim sapien id ipsum feugiat pretium. Nulla at convallis justo. Vivamus sed urna eu lectus varius dignissim nec ut justo. Vestibulum porttitor efficitur erat, a vulputate felis euismod in. Aenean tempor metus nec ex gravida congue. Morbi in felis a turpis fermentum bibendum. Pellentesque vitae ipsum felis. Aliquam erat volutpat. Vivamus id lacus ac sem feugiat pulvinar nec id dolor.
    
    Aliquam erat volutpat. Morbi fringilla justo non nisi gravida tincidunt. Nam gravida libero vel nisi luctus, sit amet blandit est porttitor. Integer porttitor vestibulum dolor sed lacinia. Proin fringilla leo nec diam aliquam dapibus. Etiam semper urna sed ipsum euismod imperdiet. In hac habitasse platea dictumst. Vestibulum fermentum feugiat lorem, in imperdiet sapien tempor sit amet. Aenean accumsan tempor leo ac rhoncus. Cras gravida nulla et nulla fermentum, at convallis turpis faucibus.
    
    Nunc sit amet lectus imperdiet, convallis metus et, imperdiet risus. Mauris vitae sem eu metus facilisis lobortis at a purus. Integer vel imperdiet tellus. Proin vulputate diam nec neque lacinia, vel efficitur justo tempor. Proin cursus tincidunt diam, ac imperdiet lorem laoreet sed. Etiam egestas blandit libero, eget dignissim ligula egestas id. Pellentesque porttitor leo at nulla sodales, ut gravida nulla tincidunt.
    
    Cras pulvinar euismod gravida. Sed porta tellus leo, sit amet egestas elit sagittis a. Quisque a nulla dignissim, tincidunt justo vel, iaculis tortor. Duis sodales rutrum nisl, vel laoreet mi egestas nec. Nunc nec justo risus. Maecenas dapibus, diam id luctus porttitor, lacus nunc vehicula lorem, nec viverra sapien quam id dolor. Maecenas laoreet magna lorem, a hendrerit sapien scelerisque ac. Morbi gravida nisi sed massa mattis, ac blandit sapien dapibus.
    
    Sed commodo felis in lacus feugiat, at viverra purus tincidunt. Suspendisse potenti. Duis cursus, lacus ac facilisis posuere, metus metus tincidunt lorem, sed feugiat ex augue nec orci. Aenean vestibulum nunc ut ex bibendum gravida. Nunc luctus magna ac turpis rhoncus maximus. In lobortis luctus velit. Sed varius ex sit amet massa efficitur, non elementum justo luctus. Fusce nec elit libero. Pellentesque tristique eros at orci tincidunt blandit. Pellentesque id magna nulla. Pellentesque et lectus quam. Pellentesque id elit nec ligula sollicitudin pretium. Aliquam erat volutpat. Sed imperdiet tortor nec turpis dignissim, non iaculis est semper. Etiam at vestibulum enim, non vestibulum odio.
    
    Integer eget bibendum nulla. Suspendisse faucibus elit a arcu fermentum, ut congue velit congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur, nulla nec mattis tristique, augue ex porttitor arcu, vitae feugiat justo est at sapien. Nullam suscipit odio vitae nunc porta, nec tincidunt erat congue. Nunc sed turpis justo. Sed a orci malesuada, volutpat magna sed, tincidunt sapien. Integer nec mi nec odio ornare blandit. Sed varius lorem justo, sed maximus ex sagittis eget. Vivamus scelerisque vehicula ex id dapibus. Vestibulum nec massa at orci viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sodales erat nec arcu placerat imperdiet. Vestibulum sed lacus in ligula feugiat sodales. Nunc nec libero eros. Phasellus sed elit eu elit faucibus bibendum sed a ante.
    
    Suspendisse feugiat ligula a felis sagittis dapibus. Sed vitae imperdiet diam. Aenean finibus sollicitudin purus a rhoncus. Quisque pharetra felis nec velit tincidunt, nec scelerisque massa placerat. Mauris varius lectus quis lacus volutpat, nec efficitur ligula tempor. Integer quis ante volutpat, placerat arcu at, volutpat nulla. Proin accumsan felis metus, nec lacinia risus malesuada nec. Nullam nec sem et enim imperdiet laoreet. Curabitur nec diam in tortor ultrices mattis. Suspendisse potenti. Cras vestibulum, purus et gravida cursus, lacus nisl imperdiet dolor, in iaculis leo sapien sed diam.
    
    Aenean bibendum magna in risus blandit, vel posuere tortor tincidunt. Pellentesque eget sem viverra, congue lorem id, pretium augue. Mauris sollicitudin sem vel mauris tincidunt, nec aliquam orci tempor. Pellentesque blandit ante vitae diam scelerisque, ut lacinia eros suscipit. Integer mollis magna at sem fermentum finibus. Donec rutrum erat quis dolor congue, nec varius tellus scelerisque. Aliquam congue, tortor nec faucibus mattis, ex erat porttitor nunc, in dignissim sem magna ac enim. Aliquam erat volutpat. Sed eu lorem non magna imperdiet laoreet. Nulla porta rutrum nulla, nec tincidunt nulla malesuada vel. Donec fermentum felis eget eros fringilla maximus. Mauris scelerisque accumsan augue vel iaculis.
    
    Curabitur ut posuere lorem, nec viverra nulla. Nullam id blandit augue. Curabitur pulvinar eleifend sodales. Integer dignissim sapien at ante feugiat, in gravida sapien fringilla. Suspendisse iaculis blandit augue sed facilisis. Morbi dapibus justo eu urna facilisis convallis. Vivamus finibus sollicitudin sapien, sit amet fermentum elit. Sed id nisi in nunc ullamcorper dictum. Proin id malesuada mi, nec volutpat dolor. Sed fermentum velit in magna tempor, sed accumsan nisi volutpat.`
    } 
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((b) => b.id === parseInt(id));
  const [letterClass, setLetterClass] = useState('text-animate');

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 6000);

  
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  

  if (!blog) {
    return <div style={{ padding: '2rem', color: 'red' }}>Blog not found</div>;
  }

  return (
    <div className="container blog-detail-page">
      <div className='text-zone'>
      <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={blog.title.split('')}
              idx={1}
            />
          </h1>
      <p className="blog-date">{blog.date}</p>
      <img src={blog.image} alt={blog.title} className="blog-title-image" />
      <p className="blog-content">{blog.content}</p>
      <button onClick={() => navigate(-1)} className="go-back">← Go Back</button>
      </div>
    </div>
  );
};

export default BlogDetail;
