import CollapseWidget from './task1/CollapseWidget';

const collapseWidget = new CollapseWidget(
  document.getElementById('container1'),
  'Collapse',
  'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
);
collapseWidget.bindToDOM();

const collapseWidget2 = new CollapseWidget(
  document.getElementById('container2'),
  'Collapse, ура!!!',
  'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
);
collapseWidget2.bindToDOM();

const collapseWidget3 = new CollapseWidget(
  document.getElementById('container3'),
  'Collapse, ура!!!',
  '',
);
collapseWidget3.bindToDOM();
