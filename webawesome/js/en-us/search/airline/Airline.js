
async function websocketAirline(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketAirline', function (error, message) {
      var json = JSON.parse(message['body']);
      var entityShortId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + entityShortId + ' ');
      $box.setAttribute('id', 'box-' + entityShortId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + entityShortId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + entityShortId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + entityShortId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular  fa-conveyor-belt"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify Airlines in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + entityShortId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + entityShortId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + entityShortId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + entityShortId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + entityShortId);
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + entityShortId);
      } else {
        document.querySelector('.box-' + entityShortId)?.remove();
      }
      if(entityShortId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketAirlineInner(apiRequest) {
  var entityShortId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(entityShortId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputAddress = null;
        var inputAlternateName = null;
        var inputCallSign = null;
        var inputCodeIATA = null;
        var inputCodeICAO = null;
        var inputDataProvider = null;
        var inputDateCreated = null;
        var inputDateModified = null;
        var inputOwner = null;
        var inputSeeAlso = null;
        var inputSource = null;
        var inputName = null;
        var inputDescription = null;
        var inputLocation = null;
        var inputColor = null;
        var inputId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildContext = null;
        var inputNgsildData = null;
        var inputEntityShortId = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Airline_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Airline_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Airline_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Airline_Page_archived');
        if(vars.includes('address'))
          inputAddress = $response.querySelector('.Airline_Page_address');
        if(vars.includes('alternateName'))
          inputAlternateName = $response.querySelector('.Airline_Page_alternateName');
        if(vars.includes('callSign'))
          inputCallSign = $response.querySelector('.Airline_Page_callSign');
        if(vars.includes('codeIATA'))
          inputCodeIATA = $response.querySelector('.Airline_Page_codeIATA');
        if(vars.includes('codeICAO'))
          inputCodeICAO = $response.querySelector('.Airline_Page_codeICAO');
        if(vars.includes('dataProvider'))
          inputDataProvider = $response.querySelector('.Airline_Page_dataProvider');
        if(vars.includes('dateCreated'))
          inputDateCreated = $response.querySelector('.Airline_Page_dateCreated');
        if(vars.includes('dateModified'))
          inputDateModified = $response.querySelector('.Airline_Page_dateModified');
        if(vars.includes('owner'))
          inputOwner = $response.querySelector('.Airline_Page_owner');
        if(vars.includes('seeAlso'))
          inputSeeAlso = $response.querySelector('.Airline_Page_seeAlso');
        if(vars.includes('source'))
          inputSource = $response.querySelector('.Airline_Page_source');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Airline_Page_name');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Airline_Page_description');
        if(vars.includes('location'))
          inputLocation = $response.querySelector('.Airline_Page_location');
        if(vars.includes('color'))
          inputColor = $response.querySelector('.Airline_Page_color');
        if(vars.includes('id'))
          inputId = $response.querySelector('.Airline_Page_id');
        if(vars.includes('ngsildTenant'))
          inputNgsildTenant = $response.querySelector('.Airline_Page_ngsildTenant');
        if(vars.includes('ngsildPath'))
          inputNgsildPath = $response.querySelector('.Airline_Page_ngsildPath');
        if(vars.includes('ngsildContext'))
          inputNgsildContext = $response.querySelector('.Airline_Page_ngsildContext');
        if(vars.includes('ngsildData'))
          inputNgsildData = $response.querySelector('.Airline_Page_ngsildData');
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.querySelector('.Airline_Page_entityShortId');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Airline_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Airline_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Airline_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Airline_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Airline_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Airline_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Airline_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Airline_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Airline_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Airline_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Airline_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Airline_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Airline_Page_objectText');

        jsWebsocketAirline(entityShortId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listAirline = JSON.parse($response.querySelector('.pageForm .listAirline')?.value);


        if(inputPk) {
          document.querySelectorAll('.Airline_Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Airline_Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Airline_Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Airline_Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_archived'));
        }

        if(inputAddress) {
          document.querySelectorAll('.Airline_Page_address').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAddress.getAttribute('value');
            else
              item.textContent = inputAddress.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_address'));
        }

        if(inputAlternateName) {
          document.querySelectorAll('.Airline_Page_alternateName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAlternateName.getAttribute('value');
            else
              item.textContent = inputAlternateName.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_alternateName'));
        }

        if(inputCallSign) {
          document.querySelectorAll('.Airline_Page_callSign').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCallSign.getAttribute('value');
            else
              item.textContent = inputCallSign.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_callSign'));
        }

        if(inputCodeIATA) {
          document.querySelectorAll('.Airline_Page_codeIATA').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCodeIATA.getAttribute('value');
            else
              item.textContent = inputCodeIATA.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_codeIATA'));
        }

        if(inputCodeICAO) {
          document.querySelectorAll('.Airline_Page_codeICAO').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCodeICAO.getAttribute('value');
            else
              item.textContent = inputCodeICAO.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_codeICAO'));
        }

        if(inputDataProvider) {
          document.querySelectorAll('.Airline_Page_dataProvider').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDataProvider.getAttribute('value');
            else
              item.textContent = inputDataProvider.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_dataProvider'));
        }

        if(inputDateCreated) {
          document.querySelectorAll('.Airline_Page_dateCreated').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateCreated.getAttribute('value');
            else
              item.textContent = inputDateCreated.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_dateCreated'));
        }

        if(inputDateModified) {
          document.querySelectorAll('.Airline_Page_dateModified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateModified.getAttribute('value');
            else
              item.textContent = inputDateModified.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_dateModified'));
        }

        if(inputOwner) {
          document.querySelectorAll('.Airline_Page_owner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOwner.getAttribute('value');
            else
              item.textContent = inputOwner.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_owner'));
        }

        if(inputSeeAlso) {
          document.querySelectorAll('.Airline_Page_seeAlso').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSeeAlso.getAttribute('value');
            else
              item.textContent = inputSeeAlso.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_seeAlso'));
        }

        if(inputSource) {
          document.querySelectorAll('.Airline_Page_source').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSource.getAttribute('value');
            else
              item.textContent = inputSource.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_source'));
        }

        if(inputName) {
          document.querySelectorAll('.Airline_Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_name'));
        }

        if(inputDescription) {
          document.querySelectorAll('.Airline_Page_description').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_description'));
        }

        if(inputLocation) {
          document.querySelectorAll('.Airline_Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_location'));
        }

        if(inputColor) {
          document.querySelectorAll('.Airline_Page_color').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputColor.getAttribute('value');
            else
              item.textContent = inputColor.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_color'));
        }

        if(inputId) {
          document.querySelectorAll('.Airline_Page_id').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputId.getAttribute('value');
            else
              item.textContent = inputId.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_id'));
        }

        if(inputNgsildTenant) {
          document.querySelectorAll('.Airline_Page_ngsildTenant').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildTenant.getAttribute('value');
            else
              item.textContent = inputNgsildTenant.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_ngsildTenant'));
        }

        if(inputNgsildPath) {
          document.querySelectorAll('.Airline_Page_ngsildPath').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildPath.getAttribute('value');
            else
              item.textContent = inputNgsildPath.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_ngsildPath'));
        }

        if(inputNgsildContext) {
          document.querySelectorAll('.Airline_Page_ngsildContext').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildContext.getAttribute('value');
            else
              item.textContent = inputNgsildContext.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_ngsildContext'));
        }

        if(inputNgsildData) {
          document.querySelectorAll('.Airline_Page_ngsildData').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildData.getAttribute('value');
            else
              item.textContent = inputNgsildData.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_ngsildData'));
        }

        if(inputEntityShortId) {
          document.querySelectorAll('.Airline_Page_entityShortId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEntityShortId.getAttribute('value');
            else
              item.textContent = inputEntityShortId.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_entityShortId'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Airline_Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Airline_Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Airline_Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Airline_Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Airline_Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Airline_Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Airline_Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Airline_Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Airline_Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Airline_Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Airline_Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Airline_Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Airline_Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Airline_Page_objectText'));
        }

          pageGraphAirline();
      });
    });
  }
}

function pageGraphAirline(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'Airlines';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphAirlinePage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listAirline.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listAirline.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipAirline(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapAirline) {
      window.geoJSONAirline.clearLayers();
      window.listAirline.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleAirline
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleAirline(feature));
              }
            });
            window.geoJSONAirline.addLayer(layerGeoJson);
          });
        }
      });
    } else if(document.getElementById('htmBodyGraphLocationAirlinePage')) {
      window.mapAirline = L.map('htmBodyGraphLocationAirlinePage', {
        position: 'topright'
        , zoomControl: true
        , scrollWheelZoom: true
        , closePopupOnClick: false
        , contextmenu: true
        , contextmenuWidth: 140
        , contextmenuItems: [
          {
            text: 'Show coordinates'
            , callback: function(event) {
              alert(event.latlng);
            }
          }
          ]
      });
      window.mapAirline.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendAirline;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapAirline);

      if(window.bounds && window['DEFAULT_MAP_ZOOM'] && window.bounds.getNorthEast()) {
        if(listAirline.length == 1) {
          window.mapAirline.setView(window.bounds.getNorthEast(), window['DEFAULT_MAP_ZOOM']);
        } else {
          window.mapAirline.fitBounds(window.bounds);
        }
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapAirline.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapAirline.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapAirline.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONAirline = L.geoJSON().addTo(window.mapAirline);
      window.listAirline.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleAirline
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleAirline(feature));
              }
            });
            window.geoJSONAirline.addLayer(layerGeoJson);
          });
        }
      });
      window.mapAirline.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipAirline(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapAirline.addLayer(drawnItems);
      const drawControl = new L.Control.Draw({
        position: 'topright'
        , edit: {
          featureGroup: drawnItems
        }
        , draw: {
          polygon: true
          , polyline: true
          , rectangle: true
          , circle: true
          , marker: true
        }
      });
      window.mapAirline.addControl(drawControl);
      window.mapAirline.on(L.Draw.Event.CREATED, function (event) {
        drawnItems.addLayer(event.layer);
        var contextmenuItems = [];
        if(event.layerType == 'marker') {
          contextmenuItems.push({
            text: 'Set location of ' + result.objectTitle
            , callback: function(event2) {
              patchAirlineLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
            }
          });
        }
        event.layer.bindContextMenu({
          contextmenu: true
          , contextmenuItems: contextmenuItems
        });
      });
    }
  }
}
function patchAirlineLocation(target, location) {
  patchAirlineVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqAirline_time').innerText = '';
  searchPage('Airline', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqAirline_time').value = x;
      document.querySelector('#fqAirline_time').onchange();
      searchPage('Airline');
    }, speedRate);
  });
}

// Search //

async function searchAirline($formFilters, success, error) {
  var filters = searchAirlineFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchAirlineVals(filters, target, success, error);
}

function searchAirlineFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterCallSign = $formFilters.querySelector('.valueCallSign')?.value;
    if(filterCallSign != null && filterCallSign !== '')
      filters.push({ name: 'fq', value: 'callSign:' + filterCallSign });

    var filterCodeIATA = $formFilters.querySelector('.valueCodeIATA')?.value;
    if(filterCodeIATA != null && filterCodeIATA !== '')
      filters.push({ name: 'fq', value: 'codeIATA:' + filterCodeIATA });

    var filterCodeICAO = $formFilters.querySelector('.valueCodeICAO')?.value;
    if(filterCodeICAO != null && filterCodeICAO !== '')
      filters.push({ name: 'fq', value: 'codeICAO:' + filterCodeICAO });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterColor = $formFilters.querySelector('.valueColor')?.value;
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });
  }
  return filters;
}

function searchAirlineVals(filters, target, success, error) {


  fetch(
    '/en-us/api/airline?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestAirlineObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular  fa-conveyor-belt"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchAirlineVals($formFilters, target, success, error);
}

// GET //

async function getAirline(pk) {
  fetch(
    '/en-us/api/airline/' + entityShortId
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchAirline($formFilters, $formValues, target, entityShortId, success, error) {
  var filters = patchAirlineFilters($formFilters);

  var vals = {};

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  var removePk = $formValues.querySelector('.removePk')?.value === 'true';
  var setPk = removePk ? null : $formValues.querySelector('.setPk')?.value;
  var addPk = $formValues.querySelector('.addPk')?.value;
  if(removePk || setPk != null && setPk !== '')
    vals['setPk'] = setPk;
  if(addPk != null && addPk !== '')
    vals['addPk'] = addPk;
  var removePk = $formValues.querySelector('.removePk')?.value;
  if(removePk != null && removePk !== '')
    vals['removePk'] = removePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueAddress = $formValues.querySelector('.valueAddress')?.value;
  var removeAddress = $formValues.querySelector('.removeAddress')?.value === 'true';
  var setAddress = removeAddress ? null : $formValues.querySelector('.setAddress')?.value;
  var addAddress = $formValues.querySelector('.addAddress')?.value;
  if(removeAddress || setAddress != null && setAddress !== '')
    vals['setAddress'] = JSON.parse(setAddress);
  if(addAddress != null && addAddress !== '')
    vals['addAddress'] = addAddress;
  var removeAddress = $formValues.querySelector('.removeAddress')?.value;
  if(removeAddress != null && removeAddress !== '')
    vals['removeAddress'] = removeAddress;

  var valueAlternateName = $formValues.querySelector('.valueAlternateName')?.value;
  var removeAlternateName = $formValues.querySelector('.removeAlternateName')?.value === 'true';
  var setAlternateName = removeAlternateName ? null : $formValues.querySelector('.setAlternateName')?.value;
  var addAlternateName = $formValues.querySelector('.addAlternateName')?.value;
  if(removeAlternateName || setAlternateName != null && setAlternateName !== '')
    vals['setAlternateName'] = setAlternateName;
  if(addAlternateName != null && addAlternateName !== '')
    vals['addAlternateName'] = addAlternateName;
  var removeAlternateName = $formValues.querySelector('.removeAlternateName')?.value;
  if(removeAlternateName != null && removeAlternateName !== '')
    vals['removeAlternateName'] = removeAlternateName;

  var valueCallSign = $formValues.querySelector('.valueCallSign')?.value;
  var removeCallSign = $formValues.querySelector('.removeCallSign')?.value === 'true';
  var setCallSign = removeCallSign ? null : $formValues.querySelector('.setCallSign')?.value;
  var addCallSign = $formValues.querySelector('.addCallSign')?.value;
  if(removeCallSign || setCallSign != null && setCallSign !== '')
    vals['setCallSign'] = setCallSign;
  if(addCallSign != null && addCallSign !== '')
    vals['addCallSign'] = addCallSign;
  var removeCallSign = $formValues.querySelector('.removeCallSign')?.value;
  if(removeCallSign != null && removeCallSign !== '')
    vals['removeCallSign'] = removeCallSign;

  var valueCodeIATA = $formValues.querySelector('.valueCodeIATA')?.value;
  var removeCodeIATA = $formValues.querySelector('.removeCodeIATA')?.value === 'true';
  var setCodeIATA = removeCodeIATA ? null : $formValues.querySelector('.setCodeIATA')?.value;
  var addCodeIATA = $formValues.querySelector('.addCodeIATA')?.value;
  if(removeCodeIATA || setCodeIATA != null && setCodeIATA !== '')
    vals['setCodeIATA'] = setCodeIATA;
  if(addCodeIATA != null && addCodeIATA !== '')
    vals['addCodeIATA'] = addCodeIATA;
  var removeCodeIATA = $formValues.querySelector('.removeCodeIATA')?.value;
  if(removeCodeIATA != null && removeCodeIATA !== '')
    vals['removeCodeIATA'] = removeCodeIATA;

  var valueCodeICAO = $formValues.querySelector('.valueCodeICAO')?.value;
  var removeCodeICAO = $formValues.querySelector('.removeCodeICAO')?.value === 'true';
  var setCodeICAO = removeCodeICAO ? null : $formValues.querySelector('.setCodeICAO')?.value;
  var addCodeICAO = $formValues.querySelector('.addCodeICAO')?.value;
  if(removeCodeICAO || setCodeICAO != null && setCodeICAO !== '')
    vals['setCodeICAO'] = setCodeICAO;
  if(addCodeICAO != null && addCodeICAO !== '')
    vals['addCodeICAO'] = addCodeICAO;
  var removeCodeICAO = $formValues.querySelector('.removeCodeICAO')?.value;
  if(removeCodeICAO != null && removeCodeICAO !== '')
    vals['removeCodeICAO'] = removeCodeICAO;

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  var removeDataProvider = $formValues.querySelector('.removeDataProvider')?.value === 'true';
  var setDataProvider = removeDataProvider ? null : $formValues.querySelector('.setDataProvider')?.value;
  var addDataProvider = $formValues.querySelector('.addDataProvider')?.value;
  if(removeDataProvider || setDataProvider != null && setDataProvider !== '')
    vals['setDataProvider'] = setDataProvider;
  if(addDataProvider != null && addDataProvider !== '')
    vals['addDataProvider'] = addDataProvider;
  var removeDataProvider = $formValues.querySelector('.removeDataProvider')?.value;
  if(removeDataProvider != null && removeDataProvider !== '')
    vals['removeDataProvider'] = removeDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  var removeDateCreated = $formValues.querySelector('.removeDateCreated')?.value === 'true';
  var setDateCreated = removeDateCreated ? null : $formValues.querySelector('.setDateCreated')?.value;
  var addDateCreated = $formValues.querySelector('.addDateCreated')?.value;
  if(removeDateCreated || setDateCreated != null && setDateCreated !== '')
    vals['setDateCreated'] = setDateCreated;
  if(addDateCreated != null && addDateCreated !== '')
    vals['addDateCreated'] = addDateCreated;
  var removeDateCreated = $formValues.querySelector('.removeDateCreated')?.value;
  if(removeDateCreated != null && removeDateCreated !== '')
    vals['removeDateCreated'] = removeDateCreated;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  var removeDateModified = $formValues.querySelector('.removeDateModified')?.value === 'true';
  var setDateModified = removeDateModified ? null : $formValues.querySelector('.setDateModified')?.value;
  var addDateModified = $formValues.querySelector('.addDateModified')?.value;
  if(removeDateModified || setDateModified != null && setDateModified !== '')
    vals['setDateModified'] = setDateModified;
  if(addDateModified != null && addDateModified !== '')
    vals['addDateModified'] = addDateModified;
  var removeDateModified = $formValues.querySelector('.removeDateModified')?.value;
  if(removeDateModified != null && removeDateModified !== '')
    vals['removeDateModified'] = removeDateModified;

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  var removeOwner = $formValues.querySelector('.removeOwner')?.value === 'true';
  var setOwner = removeOwner ? null : $formValues.querySelector('.setOwner')?.value;
  var addOwner = $formValues.querySelector('.addOwner')?.value;
  if(removeOwner || setOwner != null && setOwner !== '')
    vals['setOwner'] = JSON.parse(setOwner);
  if(addOwner != null && addOwner !== '')
    vals['addOwner'] = addOwner;
  var removeOwner = $formValues.querySelector('.removeOwner')?.value;
  if(removeOwner != null && removeOwner !== '')
    vals['removeOwner'] = removeOwner;

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value === 'true';
  var setSeeAlso = removeSeeAlso ? null : $formValues.querySelector('.setSeeAlso')?.value;
  var addSeeAlso = $formValues.querySelector('.addSeeAlso')?.value;
  if(removeSeeAlso || setSeeAlso != null && setSeeAlso !== '')
    vals['setSeeAlso'] = setSeeAlso;
  if(addSeeAlso != null && addSeeAlso !== '')
    vals['addSeeAlso'] = addSeeAlso;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value;
  if(removeSeeAlso != null && removeSeeAlso !== '')
    vals['removeSeeAlso'] = removeSeeAlso;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  var removeSource = $formValues.querySelector('.removeSource')?.value === 'true';
  var setSource = removeSource ? null : $formValues.querySelector('.setSource')?.value;
  var addSource = $formValues.querySelector('.addSource')?.value;
  if(removeSource || setSource != null && setSource !== '')
    vals['setSource'] = setSource;
  if(addSource != null && addSource !== '')
    vals['addSource'] = addSource;
  var removeSource = $formValues.querySelector('.removeSource')?.value;
  if(removeSource != null && removeSource !== '')
    vals['removeSource'] = removeSource;

  var valueName = $formValues.querySelector('.valueName')?.value;
  var removeName = $formValues.querySelector('.removeName')?.value === 'true';
  var setName = removeName ? null : $formValues.querySelector('.setName')?.value;
  var addName = $formValues.querySelector('.addName')?.value;
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.querySelector('.removeName')?.value;
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value === 'true';
  var setDescription = removeDescription ? null : $formValues.querySelector('.setDescription')?.value;
  var addDescription = $formValues.querySelector('.addDescription')?.value;
  if(removeDescription || setDescription != null && setDescription !== '')
    vals['setDescription'] = setDescription;
  if(addDescription != null && addDescription !== '')
    vals['addDescription'] = addDescription;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value;
  if(removeDescription != null && removeDescription !== '')
    vals['removeDescription'] = removeDescription;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value === 'true';
  var setLocation = removeLocation ? null : $formValues.querySelector('.setLocation')?.value;
  var addLocation = $formValues.querySelector('.addLocation')?.value;
  if(removeLocation || setLocation != null && setLocation !== '')
    vals['setLocation'] = JSON.parse(setLocation);
  if(addLocation != null && addLocation !== '')
    vals['addLocation'] = addLocation;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value;
  if(removeLocation != null && removeLocation !== '')
    vals['removeLocation'] = removeLocation;

  var valueColor = $formValues.querySelector('.valueColor')?.value;
  var removeColor = $formValues.querySelector('.removeColor')?.value === 'true';
  var setColor = removeColor ? null : $formValues.querySelector('.setColor')?.value;
  var addColor = $formValues.querySelector('.addColor')?.value;
  if(removeColor || setColor != null && setColor !== '')
    vals['setColor'] = setColor;
  if(addColor != null && addColor !== '')
    vals['addColor'] = addColor;
  var removeColor = $formValues.querySelector('.removeColor')?.value;
  if(removeColor != null && removeColor !== '')
    vals['removeColor'] = removeColor;

  var valueId = $formValues.querySelector('.valueId')?.value;
  var removeId = $formValues.querySelector('.removeId')?.value === 'true';
  var setId = removeId ? null : $formValues.querySelector('.setId')?.value;
  var addId = $formValues.querySelector('.addId')?.value;
  if(removeId || setId != null && setId !== '')
    vals['setId'] = setId;
  if(addId != null && addId !== '')
    vals['addId'] = addId;
  var removeId = $formValues.querySelector('.removeId')?.value;
  if(removeId != null && removeId !== '')
    vals['removeId'] = removeId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value === 'true';
  var setNgsildTenant = removeNgsildTenant ? null : $formValues.querySelector('.setNgsildTenant')?.value;
  var addNgsildTenant = $formValues.querySelector('.addNgsildTenant')?.value;
  if(removeNgsildTenant || setNgsildTenant != null && setNgsildTenant !== '')
    vals['setNgsildTenant'] = setNgsildTenant;
  if(addNgsildTenant != null && addNgsildTenant !== '')
    vals['addNgsildTenant'] = addNgsildTenant;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value;
  if(removeNgsildTenant != null && removeNgsildTenant !== '')
    vals['removeNgsildTenant'] = removeNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value === 'true';
  var setNgsildPath = removeNgsildPath ? null : $formValues.querySelector('.setNgsildPath')?.value;
  var addNgsildPath = $formValues.querySelector('.addNgsildPath')?.value;
  if(removeNgsildPath || setNgsildPath != null && setNgsildPath !== '')
    vals['setNgsildPath'] = setNgsildPath;
  if(addNgsildPath != null && addNgsildPath !== '')
    vals['addNgsildPath'] = addNgsildPath;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value;
  if(removeNgsildPath != null && removeNgsildPath !== '')
    vals['removeNgsildPath'] = removeNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value === 'true';
  var setNgsildContext = removeNgsildContext ? null : $formValues.querySelector('.setNgsildContext')?.value;
  var addNgsildContext = $formValues.querySelector('.addNgsildContext')?.value;
  if(removeNgsildContext || setNgsildContext != null && setNgsildContext !== '')
    vals['setNgsildContext'] = setNgsildContext;
  if(addNgsildContext != null && addNgsildContext !== '')
    vals['addNgsildContext'] = addNgsildContext;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value;
  if(removeNgsildContext != null && removeNgsildContext !== '')
    vals['removeNgsildContext'] = removeNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value === 'true';
  var setNgsildData = removeNgsildData ? null : $formValues.querySelector('.setNgsildData')?.value;
  var addNgsildData = $formValues.querySelector('.addNgsildData')?.value;
  if(removeNgsildData || setNgsildData != null && setNgsildData !== '')
    vals['setNgsildData'] = JSON.parse(setNgsildData);
  if(addNgsildData != null && addNgsildData !== '')
    vals['addNgsildData'] = addNgsildData;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value;
  if(removeNgsildData != null && removeNgsildData !== '')
    vals['removeNgsildData'] = removeNgsildData;

  var valueEntityShortId = $formValues.querySelector('.valueEntityShortId')?.value;
  var removeEntityShortId = $formValues.querySelector('.removeEntityShortId')?.value === 'true';
  var setEntityShortId = removeEntityShortId ? null : $formValues.querySelector('.setEntityShortId')?.value;
  var addEntityShortId = $formValues.querySelector('.addEntityShortId')?.value;
  if(removeEntityShortId || setEntityShortId != null && setEntityShortId !== '')
    vals['setEntityShortId'] = setEntityShortId;
  if(addEntityShortId != null && addEntityShortId !== '')
    vals['addEntityShortId'] = addEntityShortId;
  var removeEntityShortId = $formValues.querySelector('.removeEntityShortId')?.value;
  if(removeEntityShortId != null && removeEntityShortId !== '')
    vals['removeEntityShortId'] = removeEntityShortId;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value === 'true';
  var setSessionId = removeSessionId ? null : $formValues.querySelector('.setSessionId')?.value;
  var addSessionId = $formValues.querySelector('.addSessionId')?.value;
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value;
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value === 'true';
  var setUserKey = removeUserKey ? null : $formValues.querySelector('.setUserKey')?.value;
  var addUserKey = $formValues.querySelector('.addUserKey')?.value;
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value;
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value === 'true';
  var setEditPage = removeEditPage ? null : $formValues.querySelector('.setEditPage')?.value;
  var addEditPage = $formValues.querySelector('.addEditPage')?.value;
  if(removeEditPage || setEditPage != null && setEditPage !== '')
    vals['setEditPage'] = setEditPage;
  if(addEditPage != null && addEditPage !== '')
    vals['addEditPage'] = addEditPage;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value;
  if(removeEditPage != null && removeEditPage !== '')
    vals['removeEditPage'] = removeEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value === 'true';
  var setUserPage = removeUserPage ? null : $formValues.querySelector('.setUserPage')?.value;
  var addUserPage = $formValues.querySelector('.addUserPage')?.value;
  if(removeUserPage || setUserPage != null && setUserPage !== '')
    vals['setUserPage'] = setUserPage;
  if(addUserPage != null && addUserPage !== '')
    vals['addUserPage'] = addUserPage;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value;
  if(removeUserPage != null && removeUserPage !== '')
    vals['removeUserPage'] = removeUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value === 'true';
  var setDownload = removeDownload ? null : $formValues.querySelector('.setDownload')?.value;
  var addDownload = $formValues.querySelector('.addDownload')?.value;
  if(removeDownload || setDownload != null && setDownload !== '')
    vals['setDownload'] = setDownload;
  if(addDownload != null && addDownload !== '')
    vals['addDownload'] = addDownload;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value;
  if(removeDownload != null && removeDownload !== '')
    vals['removeDownload'] = removeDownload;

  patchAirlineVals(entityShortId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'entityShortId:' + entityShortId}], vals, target, success, error);
}

function patchAirlineFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterCallSign = $formFilters.querySelector('.valueCallSign')?.value;
    if(filterCallSign != null && filterCallSign !== '')
      filters.push({ name: 'fq', value: 'callSign:' + filterCallSign });

    var filterCodeIATA = $formFilters.querySelector('.valueCodeIATA')?.value;
    if(filterCodeIATA != null && filterCodeIATA !== '')
      filters.push({ name: 'fq', value: 'codeIATA:' + filterCodeIATA });

    var filterCodeICAO = $formFilters.querySelector('.valueCodeICAO')?.value;
    if(filterCodeICAO != null && filterCodeICAO !== '')
      filters.push({ name: 'fq', value: 'codeICAO:' + filterCodeICAO });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterColor = $formFilters.querySelector('.valueColor')?.value;
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });
  }
  return filters;
}

function patchAirlineVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchAirlineVals(filters, vals, target, success, error);
}

function patchAirlineVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/airline?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postAirline($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueAddress = $formValues.querySelector('.valueAddress')?.value;
  if(valueAddress != null && valueAddress !== '')
    vals['address'] = JSON.parse(valueAddress);

  var valueAlternateName = $formValues.querySelector('.valueAlternateName')?.value;
  if(valueAlternateName != null && valueAlternateName !== '')
    vals['alternateName'] = valueAlternateName;

  var valueCallSign = $formValues.querySelector('.valueCallSign')?.value;
  if(valueCallSign != null && valueCallSign !== '')
    vals['callSign'] = valueCallSign;

  var valueCodeIATA = $formValues.querySelector('.valueCodeIATA')?.value;
  if(valueCodeIATA != null && valueCodeIATA !== '')
    vals['codeIATA'] = valueCodeIATA;

  var valueCodeICAO = $formValues.querySelector('.valueCodeICAO')?.value;
  if(valueCodeICAO != null && valueCodeICAO !== '')
    vals['codeICAO'] = valueCodeICAO;

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  if(valueDataProvider != null && valueDataProvider !== '')
    vals['dataProvider'] = valueDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  if(valueDateCreated != null && valueDateCreated !== '')
    vals['dateCreated'] = valueDateCreated;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  if(valueDateModified != null && valueDateModified !== '')
    vals['dateModified'] = valueDateModified;

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  if(valueOwner != null && valueOwner !== '')
    vals['owner'] = JSON.parse(valueOwner);

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  if(valueSeeAlso != null && valueSeeAlso !== '')
    vals['seeAlso'] = valueSeeAlso;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  if(valueSource != null && valueSource !== '')
    vals['source'] = valueSource;

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueColor = $formValues.querySelector('.valueColor')?.value;
  if(valueColor != null && valueColor !== '')
    vals['color'] = valueColor;

  var valueId = $formValues.querySelector('.valueId')?.value;
  if(valueId != null && valueId !== '')
    vals['id'] = valueId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  if(valueNgsildTenant != null && valueNgsildTenant !== '')
    vals['ngsildTenant'] = valueNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  if(valueNgsildPath != null && valueNgsildPath !== '')
    vals['ngsildPath'] = valueNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  if(valueNgsildContext != null && valueNgsildContext !== '')
    vals['ngsildContext'] = valueNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  if(valueNgsildData != null && valueNgsildData !== '')
    vals['ngsildData'] = JSON.parse(valueNgsildData);

  var valueEntityShortId = $formValues.querySelector('.valueEntityShortId')?.value;
  if(valueEntityShortId != null && valueEntityShortId !== '')
    vals['entityShortId'] = valueEntityShortId;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  if(valueUserPage != null && valueUserPage !== '')
    vals['userPage'] = valueUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  fetch(
    '/en-us/api/airline'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postAirlineVals(vals, target, success, error) {
  fetch(
    '/en-us/api/airline'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteAirline(target, entityShortId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/airline/' + encodeURIComponent(entityShortId)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportAirline($formValues, target, entityShortId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportAirlineVals(JSON.parse(json), target, success, error);
}

function putimportAirlineVals(json, target, success, error) {
  fetch(
    '/en-us/api/airline-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterAirline(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/airline'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}
