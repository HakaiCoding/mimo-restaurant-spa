import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
    private isLargeScreenSource = new BehaviorSubject<boolean>(false);
    isLargeScreen$ = this.isLargeScreenSource.asObservable();

    private isMediumScreenSource = new BehaviorSubject<boolean>(false);
    isMediumScreen$ = this.isMediumScreenSource.asObservable();

    private isSmallScreenSource = new BehaviorSubject<boolean>(false);
    isSmallScreen$ = this.isSmallScreenSource.asObservable();

    constructor(private breakpointObserver: BreakpointObserver) {
        // Observe for large screens (min-width: 1024px)
        this.breakpointObserver.observe(['(min-width: 1025px)'])
            .subscribe(result => this.isLargeScreenSource.next(result.matches));

        // Observe for medium screens (min-width: 480px and max-width: 1023px)
        this.breakpointObserver.observe(['(min-width: 480px) and (max-width: 1024px)'])
            .subscribe(result => this.isMediumScreenSource.next(result.matches));

        // Observe for small screens (max-width: 479px)
        this.breakpointObserver.observe(['(max-width: 479px)'])
            .subscribe(result => this.isSmallScreenSource.next(result.matches));
    }
}
