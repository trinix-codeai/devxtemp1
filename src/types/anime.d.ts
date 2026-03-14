declare module 'animejs' {
    interface AnimeParams {
        targets?: string | object | HTMLElement | SVGElement | NodeList | null | (string | object | HTMLElement | SVGElement | NodeList)[];
        duration?: number;
        delay?: number | Function;
        endDelay?: number;
        easing?: string;
        round?: number;
        direction?: 'normal' | 'reverse' | 'alternate';
        loop?: boolean | number;
        autoplay?: boolean;
        begin?: Function;
        update?: Function;
        complete?: Function;
        translateX?: any;
        translateY?: any;
        translateZ?: any;
        rotate?: any;
        rotateX?: any;
        rotateY?: any;
        rotateZ?: any;
        scale?: any;
        scaleX?: any;
        scaleY?: any;
        opacity?: any;
        width?: any;
        height?: any;
        top?: any;
        left?: any;
        right?: any;
        bottom?: any;
        color?: any;
        backgroundColor?: any;
        borderRadius?: any;
        strokeDashoffset?: any;
        [key: string]: any;
    }

    interface AnimeInstance {
        play(): void;
        pause(): void;
        restart(): void;
        seek(time: number): void;
        reverse(): void;
        finished: Promise<void>;
        began: boolean;
        paused: boolean;
        completed: boolean;
        reversed: boolean;
    }

    interface AnimeStagger {
        (value: number | string | number[], options?: object): any;
    }

    function anime(params: AnimeParams): AnimeInstance;

    namespace anime {
        function stagger(value: number | string | (number | string)[], options?: { start?: number | string; direction?: string; easing?: string; grid?: number[]; from?: string | number; axis?: string }): any;
        function timeline(params?: AnimeParams): AnimeInstance & { add(params: AnimeParams, offset?: string | number): any };
        function random(min: number, max: number): number;
        function set(targets: any, props: object): void;
        const running: AnimeInstance[];
    }

    export = anime;
}
