import { useRef, useEffect } from "react"
import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

function Fancybox(props: any) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]"
    const options = props.options || {
      autoStart: false,
      tpl: {
        hideScrollbar: false,
        main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
        <div class="fancybox__backdrop"></div>
        <div class="fancybox__carousel"></div>
        <div class="fancybox__footer"></div>
        </div>`,
      },
      contentClick: false,
      closeButton: true,
      Images: {
        zoom: false
      },
      Toolbar: {
        display: false,
      },
      Thumbs: {
        type: "classic",
      },
    }

    NativeFancybox.bind(container, delegate, options)

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    }
  })

  return <div ref={containerRef}>{props.children}</div>
}

export default Fancybox
