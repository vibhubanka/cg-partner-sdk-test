(function (window, doucment) {
    let isSafari = false;
    try {
      isSafari =
        /constructor/i.test(window.HTMLElement) ||
        (function (p) {
          return p.toString() === '[object SafariRemoteNotification]';
        })(
          !window['safari'] ||
            (typeof safari !== 'undefined' && window['safari'].pushNotification)
        );
    } catch (error) {
      console.log('Error in regex', error);
    }
    if (isSafari) {
      console.log('Blocked For Safari');
      return null;
    }
  
    console.log('Adding crgr');
    //Create an iframe Element
    let ifrm = doucment.createElement('iframe');
    ifrm.setAttribute('id', 'ifrm');
  
    try {
      //Insert the iframe at the given location
      let citationGeneratorElement = doucment.getElementById(
        'quillbot-citation-generator'
      );
      citationGeneratorElement.appendChild(ifrm);
    } catch (err) {}
  
    let partnerCompanyDomainName = {
      'www.litcharts.com': 'litcharts',
      'stage.litcharts.com': 'litcharts',
    };
  
    // Set Iframe attributes
    ifrm.setAttribute(
      'src',
      `https://demo.quillbot.dev/citation-generator?independentTool=true&partnerCompany=${
        partnerCompanyDomainName[window?.location?.hostname] || 'litcharts'
      }`
    );
    ifrm.setAttribute('style', 'height:inherit;width:inherit;');
  })(window, document);
  