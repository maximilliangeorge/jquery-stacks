(function ( $ ) {
  $.fn.stack = function() {

      this.css( "position", "fixed" );

      var elemCount = this.length,
          elems = [],
          currentElem = 0,
          prevHeight = 0;

      this.each(function() {
        $( 'body' ).css( 'height' , $( 'body' ).outerHeight() + $( this ).outerHeight());
        $( this ).css( 'z-index' , elemCount);
        elems.push( $( this ) );
        elemCount--;
      });

      $( window ).scroll(function() {
        elems[currentElem].css('top', - $( window ).scrollTop() + prevHeight);
          if ( $( window ).scrollTop() > 0 && $( window ).scrollTop() < $( document ).outerHeight() ) {
            checkElems();
          }
      });

      function checkElems() {
        if ( $( window ).scrollTop() > elems[currentElem].outerHeight() + prevHeight ) {
          prevHeight = prevHeight + elems[currentElem].outerHeight();
          currentElem++;
        }

        if ( $( window) .scrollTop() < prevHeight ) {
          prevHeight = prevHeight - elems[currentElem].outerHeight();
          currentElem--;
        }
      }

  };
}( jQuery ));
