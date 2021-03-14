import CollapseWidget from './task1/CollapseWidget';
import CallbackWidget from './task2/CallbackWidget';
import LikerWidget from './task3/LikerWidget';

const collapseWidget = new CollapseWidget(
  document.getElementById('container1'),
  'Collapse',
  'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
);
collapseWidget.bindToDOM();

const collapseWidget2 = new CallbackWidget(document.getElementById('container2'));
collapseWidget2.bindToDOM();

const collapseWidget3 = new LikerWidget(document.getElementById('container3'));
collapseWidget3.bindToDOM();
