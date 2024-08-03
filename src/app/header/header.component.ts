import { Component, Input, OnChanges,OnInit,DoCheck} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges,OnInit,DoCheck{
 @Input() count!:number;

constructor(){
  console.log('header constructor called');
}

ngOnChanges() {
  console.log("ngOnChanges everytime called. when the input properties change the value.")
}

ngOnInit()
{
  console.log("ngOnInIt only once called.we can write fetching requests in ngOnIt, it will run only once")
}

ngDoCheck(){
  console.log("ngDoCheck everytime called. when the input properties change the value.")
}
ngAfterContentInit()
  {
        console.log("ngAfterContentInit only once called.When the after contentDOM initiated.")
  }
  ngAfterContentChecked(){
      console.log("ngAfterContentChecked everytime called.When the check happends in contentDOM")
  }
  ngAfterViewInit(){
       console.log('ngAfterViewInit only once called.When the after viewDOM initiated.');
  }
  ngAfterViewChecked() {
       console.log("ngAfterViewChecked everytime called.When the check happends in viewDOM");
  }
  ngOnDestroy()
  {
    console.log("called when going out of component")
  }
}
