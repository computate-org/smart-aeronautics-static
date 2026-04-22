
async function websocketContract(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketContract', function (error, message) {
      var json = JSON.parse(message['body']);
      var contractId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + contractId + ' ');
      $box.setAttribute('id', 'box-' + contractId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + contractId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + contractId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + contractId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular  fa-conveyor-belt"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify contracts in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + contractId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + contractId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + contractId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + contractId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + contractId);
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
        var $old_box = document.querySelector('.box-' + contractId);
      } else {
        document.querySelector('.box-' + contractId)?.remove();
      }
      if(contractId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketContractInner(apiRequest) {
  var contractId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(contractId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputRegion = null;
        var inputStartDate = null;
        var inputName = null;
        var inputAbbreviation = null;
        var inputInvestmentYearsTotal = null;
        var inputInvestmentYears = null;
        var inputInvestmentsPerYear = null;
        var inputInvestmentsPerYearCumulative = null;
        var inputAssetClasses = null;
        var inputAssetClassesTargetIrr = null;
        var inputRevenueStreams = null;
        var inputEconomicOutputProjections = null;
        var inputTotalGdpImpact = null;
        var inputEconomicOutputProjectionsDataset = null;
        var inputCumulativeInvestmentChart = null;
        var inputEconomicOutputChart = null;
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
        var inputSolrId = null;
        var inputDisplayName = null;
        var inputContractId = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Contract_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Contract_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Contract_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Contract_Page_archived');
        if(vars.includes('region'))
          inputRegion = $response.querySelector('.Contract_Page_region');
        if(vars.includes('startDate'))
          inputStartDate = $response.querySelector('.Contract_Page_startDate');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Contract_Page_name');
        if(vars.includes('abbreviation'))
          inputAbbreviation = $response.querySelector('.Contract_Page_abbreviation');
        if(vars.includes('investmentYearsTotal'))
          inputInvestmentYearsTotal = $response.querySelector('.Contract_Page_investmentYearsTotal');
        if(vars.includes('investmentYears'))
          inputInvestmentYears = $response.querySelector('.Contract_Page_investmentYears');
        if(vars.includes('investmentsPerYear'))
          inputInvestmentsPerYear = $response.querySelector('.Contract_Page_investmentsPerYear');
        if(vars.includes('investmentsPerYearCumulative'))
          inputInvestmentsPerYearCumulative = $response.querySelector('.Contract_Page_investmentsPerYearCumulative');
        if(vars.includes('assetClasses'))
          inputAssetClasses = $response.querySelector('.Contract_Page_assetClasses');
        if(vars.includes('assetClassesTargetIrr'))
          inputAssetClassesTargetIrr = $response.querySelector('.Contract_Page_assetClassesTargetIrr');
        if(vars.includes('revenueStreams'))
          inputRevenueStreams = $response.querySelector('.Contract_Page_revenueStreams');
        if(vars.includes('economicOutputProjections'))
          inputEconomicOutputProjections = $response.querySelector('.Contract_Page_economicOutputProjections');
        if(vars.includes('totalGdpImpact'))
          inputTotalGdpImpact = $response.querySelector('.Contract_Page_totalGdpImpact');
        if(vars.includes('economicOutputProjectionsDataset'))
          inputEconomicOutputProjectionsDataset = $response.querySelector('.Contract_Page_economicOutputProjectionsDataset');
        if(vars.includes('cumulativeInvestmentChart'))
          inputCumulativeInvestmentChart = $response.querySelector('.Contract_Page_cumulativeInvestmentChart');
        if(vars.includes('economicOutputChart'))
          inputEconomicOutputChart = $response.querySelector('.Contract_Page_economicOutputChart');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Contract_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Contract_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Contract_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Contract_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Contract_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Contract_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Contract_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Contract_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Contract_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Contract_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Contract_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Contract_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Contract_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Contract_Page_solrId');
        if(vars.includes('displayName'))
          inputDisplayName = $response.querySelector('.Contract_Page_displayName');
        if(vars.includes('contractId'))
          inputContractId = $response.querySelector('.Contract_Page_contractId');

        jsWebsocketContract(contractId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listContract = JSON.parse($response.querySelector('.pageForm .listContract')?.value);


        if(inputPk) {
          document.querySelectorAll('.Contract_Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Contract_Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Contract_Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Contract_Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_archived'));
        }

        if(inputRegion) {
          document.querySelectorAll('.Contract_Page_region').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRegion.getAttribute('value');
            else
              item.textContent = inputRegion.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_region'));
        }

        if(inputStartDate) {
          document.querySelectorAll('.Contract_Page_startDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputStartDate.getAttribute('value');
            else
              item.textContent = inputStartDate.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_startDate'));
        }

        if(inputName) {
          document.querySelectorAll('.Contract_Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_name'));
        }

        if(inputAbbreviation) {
          document.querySelectorAll('.Contract_Page_abbreviation').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAbbreviation.getAttribute('value');
            else
              item.textContent = inputAbbreviation.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_abbreviation'));
        }

        if(inputInvestmentYearsTotal) {
          document.querySelectorAll('.Contract_Page_investmentYearsTotal').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentYearsTotal.getAttribute('value');
            else
              item.textContent = inputInvestmentYearsTotal.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentYearsTotal'));
        }

        if(inputInvestmentYears) {
          document.querySelectorAll('.Contract_Page_investmentYears').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentYears.getAttribute('value');
            else
              item.textContent = inputInvestmentYears.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentYears'));
        }

        if(inputInvestmentsPerYear) {
          document.querySelectorAll('.Contract_Page_investmentsPerYear').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentsPerYear.getAttribute('value');
            else
              item.textContent = inputInvestmentsPerYear.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentsPerYear'));
        }

        if(inputInvestmentsPerYearCumulative) {
          document.querySelectorAll('.Contract_Page_investmentsPerYearCumulative').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInvestmentsPerYearCumulative.getAttribute('value');
            else
              item.textContent = inputInvestmentsPerYearCumulative.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_investmentsPerYearCumulative'));
        }

        if(inputAssetClasses) {
          document.querySelectorAll('.Contract_Page_assetClasses').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAssetClasses.getAttribute('value');
            else
              item.textContent = inputAssetClasses.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_assetClasses'));
        }

        if(inputAssetClassesTargetIrr) {
          document.querySelectorAll('.Contract_Page_assetClassesTargetIrr').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAssetClassesTargetIrr.getAttribute('value');
            else
              item.textContent = inputAssetClassesTargetIrr.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_assetClassesTargetIrr'));
        }

        if(inputRevenueStreams) {
          document.querySelectorAll('.Contract_Page_revenueStreams').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRevenueStreams.getAttribute('value');
            else
              item.textContent = inputRevenueStreams.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_revenueStreams'));
        }

        if(inputEconomicOutputProjections) {
          document.querySelectorAll('.Contract_Page_economicOutputProjections').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEconomicOutputProjections.getAttribute('value');
            else
              item.textContent = inputEconomicOutputProjections.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_economicOutputProjections'));
        }

        if(inputTotalGdpImpact) {
          document.querySelectorAll('.Contract_Page_totalGdpImpact').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTotalGdpImpact.getAttribute('value');
            else
              item.textContent = inputTotalGdpImpact.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_totalGdpImpact'));
        }

        if(inputEconomicOutputProjectionsDataset) {
          document.querySelectorAll('.Contract_Page_economicOutputProjectionsDataset').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEconomicOutputProjectionsDataset.getAttribute('value');
            else
              item.textContent = inputEconomicOutputProjectionsDataset.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_economicOutputProjectionsDataset'));
        }

        if(inputCumulativeInvestmentChart) {
          document.querySelectorAll('.Contract_Page_cumulativeInvestmentChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCumulativeInvestmentChart.getAttribute('value');
            else
              item.textContent = inputCumulativeInvestmentChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputCumulativeInvestmentChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_cumulativeInvestmentChart'));
        }

        if(inputEconomicOutputChart) {
          document.querySelectorAll('.Contract_Page_economicOutputChart').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEconomicOutputChart.getAttribute('value');
            else
              item.textContent = inputEconomicOutputChart.textContent;
            for (let i = 0; i < item.chart.data.datasets.length; i++) {
              item.chart.data.datasets[i].data = JSON.parse(inputEconomicOutputChart.textContent).data.datasets[i].data;
            }
            item.chart.update();
          });
          addGlow(document.querySelector('.Contract_Page_economicOutputChart'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Contract_Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Contract_Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Contract_Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Contract_Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Contract_Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Contract_Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Contract_Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Contract_Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Contract_Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Contract_Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Contract_Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Contract_Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Contract_Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Contract_Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_solrId'));
        }

        if(inputDisplayName) {
          document.querySelectorAll('.Contract_Page_displayName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayName.getAttribute('value');
            else
              item.textContent = inputDisplayName.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_displayName'));
        }

        if(inputContractId) {
          document.querySelectorAll('.Contract_Page_contractId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputContractId.getAttribute('value');
            else
              item.textContent = inputContractId.textContent;
          });
          addGlow(document.querySelector('.Contract_Page_contractId'));
        }

          pageGraphContract();
      });
    });
  }
}

function pageGraphContract(apiRequest) {
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
          layout['title'] = 'contracts';
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
          Plotly.react('htmBodyGraphContractPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqContract_time').innerText = '';
  searchPage('Contract', function() {
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
      document.querySelector('#fqContract_time').value = x;
      document.querySelector('#fqContract_time').onchange();
      searchPage('Contract');
    }, speedRate);
  });
}

// Search //

async function searchContract($formFilters, success, error) {
  var filters = searchContractFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchContractVals(filters, target, success, error);
}

function searchContractFilters($formFilters) {
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

    var filterRegion = $formFilters.querySelector('.valueRegion')?.value;
    if(filterRegion != null && filterRegion !== '')
      filters.push({ name: 'fq', value: 'region:' + filterRegion });

    var filterStartDate = $formFilters.querySelector('.valueStartDate')?.value;
    if(filterStartDate != null && filterStartDate !== '')
      filters.push({ name: 'fq', value: 'startDate:' + filterStartDate });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterAbbreviation = $formFilters.querySelector('.valueAbbreviation')?.value;
    if(filterAbbreviation != null && filterAbbreviation !== '')
      filters.push({ name: 'fq', value: 'abbreviation:' + filterAbbreviation });

    var filterInvestmentYearsTotal = $formFilters.querySelector('.valueInvestmentYearsTotal')?.value;
    if(filterInvestmentYearsTotal != null && filterInvestmentYearsTotal !== '')
      filters.push({ name: 'fq', value: 'investmentYearsTotal:' + filterInvestmentYearsTotal });

    var filterInvestmentYears = $formFilters.querySelector('.valueInvestmentYears')?.value;
    if(filterInvestmentYears != null && filterInvestmentYears !== '')
      filters.push({ name: 'fq', value: 'investmentYears:' + filterInvestmentYears });

    var filterInvestmentsPerYear = $formFilters.querySelector('.valueInvestmentsPerYear')?.value;
    if(filterInvestmentsPerYear != null && filterInvestmentsPerYear !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYear:' + filterInvestmentsPerYear });

    var filterInvestmentsPerYearCumulative = $formFilters.querySelector('.valueInvestmentsPerYearCumulative')?.value;
    if(filterInvestmentsPerYearCumulative != null && filterInvestmentsPerYearCumulative !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYearCumulative:' + filterInvestmentsPerYearCumulative });

    var filterAssetClasses = $formFilters.querySelector('.valueAssetClasses')?.value;
    if(filterAssetClasses != null && filterAssetClasses !== '')
      filters.push({ name: 'fq', value: 'assetClasses:' + filterAssetClasses });

    var filterAssetClassesTargetIrr = $formFilters.querySelector('.valueAssetClassesTargetIrr')?.value;
    if(filterAssetClassesTargetIrr != null && filterAssetClassesTargetIrr !== '')
      filters.push({ name: 'fq', value: 'assetClassesTargetIrr:' + filterAssetClassesTargetIrr });

    var filterRevenueStreams = $formFilters.querySelector('.valueRevenueStreams')?.value;
    if(filterRevenueStreams != null && filterRevenueStreams !== '')
      filters.push({ name: 'fq', value: 'revenueStreams:' + filterRevenueStreams });

    var filterEconomicOutputProjections = $formFilters.querySelector('.valueEconomicOutputProjections')?.value;
    if(filterEconomicOutputProjections != null && filterEconomicOutputProjections !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjections:' + filterEconomicOutputProjections });

    var filterTotalGdpImpact = $formFilters.querySelector('.valueTotalGdpImpact')?.value;
    if(filterTotalGdpImpact != null && filterTotalGdpImpact !== '')
      filters.push({ name: 'fq', value: 'totalGdpImpact:' + filterTotalGdpImpact });

    var filterEconomicOutputProjectionsDataset = $formFilters.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
    if(filterEconomicOutputProjectionsDataset != null && filterEconomicOutputProjectionsDataset !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjectionsDataset:' + filterEconomicOutputProjectionsDataset });

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

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterDisplayName = $formFilters.querySelector('.valueDisplayName')?.value;
    if(filterDisplayName != null && filterDisplayName !== '')
      filters.push({ name: 'fq', value: 'displayName:' + filterDisplayName });

    var filterContractId = $formFilters.querySelector('.valueContractId')?.value;
    if(filterContractId != null && filterContractId !== '')
      filters.push({ name: 'fq', value: 'contractId:' + filterContractId });
  }
  return filters;
}

function searchContractVals(filters, target, success, error) {


  fetch(
    '/en-us/api/contract?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestContractObjectSuggest($formFilters, $list, target) {
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
  searchContractVals($formFilters, target, success, error);
}

// GET //

async function getContract(pk) {
  fetch(
    '/en-us/api/contract/' + contractId
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

async function patchContract($formFilters, $formValues, target, contractId, success, error) {
  var filters = patchContractFilters($formFilters);

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

  var valueRegion = $formValues.querySelector('.valueRegion')?.value;
  var removeRegion = $formValues.querySelector('.removeRegion')?.value === 'true';
  var setRegion = removeRegion ? null : $formValues.querySelector('.setRegion')?.value;
  var addRegion = $formValues.querySelector('.addRegion')?.value;
  if(removeRegion || setRegion != null && setRegion !== '')
    vals['setRegion'] = setRegion;
  if(addRegion != null && addRegion !== '')
    vals['addRegion'] = addRegion;
  var removeRegion = $formValues.querySelector('.removeRegion')?.value;
  if(removeRegion != null && removeRegion !== '')
    vals['removeRegion'] = removeRegion;

  var valueStartDate = $formValues.querySelector('.valueStartDate')?.value;
  var removeStartDate = $formValues.querySelector('.removeStartDate')?.value === 'true';
  var setStartDate = removeStartDate ? null : $formValues.querySelector('.setStartDate')?.value;
  var addStartDate = $formValues.querySelector('.addStartDate')?.value;
  if(removeStartDate || setStartDate != null && setStartDate !== '')
    vals['setStartDate'] = setStartDate;
  if(addStartDate != null && addStartDate !== '')
    vals['addStartDate'] = addStartDate;
  var removeStartDate = $formValues.querySelector('.removeStartDate')?.value;
  if(removeStartDate != null && removeStartDate !== '')
    vals['removeStartDate'] = removeStartDate;

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

  var valueAbbreviation = $formValues.querySelector('.valueAbbreviation')?.value;
  var removeAbbreviation = $formValues.querySelector('.removeAbbreviation')?.value === 'true';
  var setAbbreviation = removeAbbreviation ? null : $formValues.querySelector('.setAbbreviation')?.value;
  var addAbbreviation = $formValues.querySelector('.addAbbreviation')?.value;
  if(removeAbbreviation || setAbbreviation != null && setAbbreviation !== '')
    vals['setAbbreviation'] = setAbbreviation;
  if(addAbbreviation != null && addAbbreviation !== '')
    vals['addAbbreviation'] = addAbbreviation;
  var removeAbbreviation = $formValues.querySelector('.removeAbbreviation')?.value;
  if(removeAbbreviation != null && removeAbbreviation !== '')
    vals['removeAbbreviation'] = removeAbbreviation;

  var valueInvestmentYearsTotal = $formValues.querySelector('.valueInvestmentYearsTotal')?.value;
  var removeInvestmentYearsTotal = $formValues.querySelector('.removeInvestmentYearsTotal')?.value === 'true';
  var setInvestmentYearsTotal = removeInvestmentYearsTotal ? null : $formValues.querySelector('.setInvestmentYearsTotal')?.value;
  var addInvestmentYearsTotal = $formValues.querySelector('.addInvestmentYearsTotal')?.value;
  if(removeInvestmentYearsTotal || setInvestmentYearsTotal != null && setInvestmentYearsTotal !== '')
    vals['setInvestmentYearsTotal'] = setInvestmentYearsTotal;
  if(addInvestmentYearsTotal != null && addInvestmentYearsTotal !== '')
    vals['addInvestmentYearsTotal'] = addInvestmentYearsTotal;
  var removeInvestmentYearsTotal = $formValues.querySelector('.removeInvestmentYearsTotal')?.value;
  if(removeInvestmentYearsTotal != null && removeInvestmentYearsTotal !== '')
    vals['removeInvestmentYearsTotal'] = removeInvestmentYearsTotal;

  var valueInvestmentYears = $formValues.querySelector('.valueInvestmentYears')?.value;
  var removeInvestmentYears = $formValues.querySelector('.removeInvestmentYears')?.value === 'true';
  var setInvestmentYears = removeInvestmentYears ? null : $formValues.querySelector('.setInvestmentYears')?.value;
  var addInvestmentYears = $formValues.querySelector('.addInvestmentYears')?.value;
  if(removeInvestmentYears || setInvestmentYears != null && setInvestmentYears !== '')
    vals['setInvestmentYears'] = JSON.parse(setInvestmentYears);
  if(addInvestmentYears != null && addInvestmentYears !== '')
    vals['addInvestmentYears'] = addInvestmentYears;
  var removeInvestmentYears = $formValues.querySelector('.removeInvestmentYears')?.value;
  if(removeInvestmentYears != null && removeInvestmentYears !== '')
    vals['removeInvestmentYears'] = removeInvestmentYears;

  var valueInvestmentsPerYear = $formValues.querySelector('.valueInvestmentsPerYear')?.value;
  var removeInvestmentsPerYear = $formValues.querySelector('.removeInvestmentsPerYear')?.value === 'true';
  var setInvestmentsPerYear = removeInvestmentsPerYear ? null : $formValues.querySelector('.setInvestmentsPerYear')?.value;
  var addInvestmentsPerYear = $formValues.querySelector('.addInvestmentsPerYear')?.value;
  if(removeInvestmentsPerYear || setInvestmentsPerYear != null && setInvestmentsPerYear !== '')
    vals['setInvestmentsPerYear'] = JSON.parse(setInvestmentsPerYear);
  if(addInvestmentsPerYear != null && addInvestmentsPerYear !== '')
    vals['addInvestmentsPerYear'] = addInvestmentsPerYear;
  var removeInvestmentsPerYear = $formValues.querySelector('.removeInvestmentsPerYear')?.value;
  if(removeInvestmentsPerYear != null && removeInvestmentsPerYear !== '')
    vals['removeInvestmentsPerYear'] = removeInvestmentsPerYear;

  var valueInvestmentsPerYearCumulative = $formValues.querySelector('.valueInvestmentsPerYearCumulative')?.value;
  var removeInvestmentsPerYearCumulative = $formValues.querySelector('.removeInvestmentsPerYearCumulative')?.value === 'true';
  var setInvestmentsPerYearCumulative = removeInvestmentsPerYearCumulative ? null : $formValues.querySelector('.setInvestmentsPerYearCumulative')?.value;
  var addInvestmentsPerYearCumulative = $formValues.querySelector('.addInvestmentsPerYearCumulative')?.value;
  if(removeInvestmentsPerYearCumulative || setInvestmentsPerYearCumulative != null && setInvestmentsPerYearCumulative !== '')
    vals['setInvestmentsPerYearCumulative'] = JSON.parse(setInvestmentsPerYearCumulative);
  if(addInvestmentsPerYearCumulative != null && addInvestmentsPerYearCumulative !== '')
    vals['addInvestmentsPerYearCumulative'] = addInvestmentsPerYearCumulative;
  var removeInvestmentsPerYearCumulative = $formValues.querySelector('.removeInvestmentsPerYearCumulative')?.value;
  if(removeInvestmentsPerYearCumulative != null && removeInvestmentsPerYearCumulative !== '')
    vals['removeInvestmentsPerYearCumulative'] = removeInvestmentsPerYearCumulative;

  var valueAssetClasses = $formValues.querySelector('.valueAssetClasses')?.value;
  var removeAssetClasses = $formValues.querySelector('.removeAssetClasses')?.value === 'true';
  var setAssetClasses = removeAssetClasses ? null : $formValues.querySelector('.setAssetClasses')?.value;
  var addAssetClasses = $formValues.querySelector('.addAssetClasses')?.value;
  if(removeAssetClasses || setAssetClasses != null && setAssetClasses !== '')
    vals['setAssetClasses'] = JSON.parse(setAssetClasses);
  if(addAssetClasses != null && addAssetClasses !== '')
    vals['addAssetClasses'] = addAssetClasses;
  var removeAssetClasses = $formValues.querySelector('.removeAssetClasses')?.value;
  if(removeAssetClasses != null && removeAssetClasses !== '')
    vals['removeAssetClasses'] = removeAssetClasses;

  var valueAssetClassesTargetIrr = $formValues.querySelector('.valueAssetClassesTargetIrr')?.value;
  var removeAssetClassesTargetIrr = $formValues.querySelector('.removeAssetClassesTargetIrr')?.value === 'true';
  var setAssetClassesTargetIrr = removeAssetClassesTargetIrr ? null : $formValues.querySelector('.setAssetClassesTargetIrr')?.value;
  var addAssetClassesTargetIrr = $formValues.querySelector('.addAssetClassesTargetIrr')?.value;
  if(removeAssetClassesTargetIrr || setAssetClassesTargetIrr != null && setAssetClassesTargetIrr !== '')
    vals['setAssetClassesTargetIrr'] = JSON.parse(setAssetClassesTargetIrr);
  if(addAssetClassesTargetIrr != null && addAssetClassesTargetIrr !== '')
    vals['addAssetClassesTargetIrr'] = addAssetClassesTargetIrr;
  var removeAssetClassesTargetIrr = $formValues.querySelector('.removeAssetClassesTargetIrr')?.value;
  if(removeAssetClassesTargetIrr != null && removeAssetClassesTargetIrr !== '')
    vals['removeAssetClassesTargetIrr'] = removeAssetClassesTargetIrr;

  var valueRevenueStreams = $formValues.querySelector('.valueRevenueStreams')?.value;
  var removeRevenueStreams = $formValues.querySelector('.removeRevenueStreams')?.value === 'true';
  var setRevenueStreams = removeRevenueStreams ? null : $formValues.querySelector('.setRevenueStreams')?.value;
  var addRevenueStreams = $formValues.querySelector('.addRevenueStreams')?.value;
  if(removeRevenueStreams || setRevenueStreams != null && setRevenueStreams !== '')
    vals['setRevenueStreams'] = JSON.parse(setRevenueStreams);
  if(addRevenueStreams != null && addRevenueStreams !== '')
    vals['addRevenueStreams'] = addRevenueStreams;
  var removeRevenueStreams = $formValues.querySelector('.removeRevenueStreams')?.value;
  if(removeRevenueStreams != null && removeRevenueStreams !== '')
    vals['removeRevenueStreams'] = removeRevenueStreams;

  var valueEconomicOutputProjections = $formValues.querySelector('.valueEconomicOutputProjections')?.value;
  var removeEconomicOutputProjections = $formValues.querySelector('.removeEconomicOutputProjections')?.value === 'true';
  var setEconomicOutputProjections = removeEconomicOutputProjections ? null : $formValues.querySelector('.setEconomicOutputProjections')?.value;
  var addEconomicOutputProjections = $formValues.querySelector('.addEconomicOutputProjections')?.value;
  if(removeEconomicOutputProjections || setEconomicOutputProjections != null && setEconomicOutputProjections !== '')
    vals['setEconomicOutputProjections'] = JSON.parse(setEconomicOutputProjections);
  if(addEconomicOutputProjections != null && addEconomicOutputProjections !== '')
    vals['addEconomicOutputProjections'] = addEconomicOutputProjections;
  var removeEconomicOutputProjections = $formValues.querySelector('.removeEconomicOutputProjections')?.value;
  if(removeEconomicOutputProjections != null && removeEconomicOutputProjections !== '')
    vals['removeEconomicOutputProjections'] = removeEconomicOutputProjections;

  var valueTotalGdpImpact = $formValues.querySelector('.valueTotalGdpImpact')?.value;
  var removeTotalGdpImpact = $formValues.querySelector('.removeTotalGdpImpact')?.value === 'true';
  var setTotalGdpImpact = removeTotalGdpImpact ? null : $formValues.querySelector('.setTotalGdpImpact')?.value;
  var addTotalGdpImpact = $formValues.querySelector('.addTotalGdpImpact')?.value;
  if(removeTotalGdpImpact || setTotalGdpImpact != null && setTotalGdpImpact !== '')
    vals['setTotalGdpImpact'] = setTotalGdpImpact;
  if(addTotalGdpImpact != null && addTotalGdpImpact !== '')
    vals['addTotalGdpImpact'] = addTotalGdpImpact;
  var removeTotalGdpImpact = $formValues.querySelector('.removeTotalGdpImpact')?.value;
  if(removeTotalGdpImpact != null && removeTotalGdpImpact !== '')
    vals['removeTotalGdpImpact'] = removeTotalGdpImpact;

  var valueEconomicOutputProjectionsDataset = $formValues.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
  var removeEconomicOutputProjectionsDataset = $formValues.querySelector('.removeEconomicOutputProjectionsDataset')?.value === 'true';
  var setEconomicOutputProjectionsDataset = removeEconomicOutputProjectionsDataset ? null : $formValues.querySelector('.setEconomicOutputProjectionsDataset')?.value;
  var addEconomicOutputProjectionsDataset = $formValues.querySelector('.addEconomicOutputProjectionsDataset')?.value;
  if(removeEconomicOutputProjectionsDataset || setEconomicOutputProjectionsDataset != null && setEconomicOutputProjectionsDataset !== '')
    vals['setEconomicOutputProjectionsDataset'] = JSON.parse(setEconomicOutputProjectionsDataset);
  if(addEconomicOutputProjectionsDataset != null && addEconomicOutputProjectionsDataset !== '')
    vals['addEconomicOutputProjectionsDataset'] = addEconomicOutputProjectionsDataset;
  var removeEconomicOutputProjectionsDataset = $formValues.querySelector('.removeEconomicOutputProjectionsDataset')?.value;
  if(removeEconomicOutputProjectionsDataset != null && removeEconomicOutputProjectionsDataset !== '')
    vals['removeEconomicOutputProjectionsDataset'] = removeEconomicOutputProjectionsDataset;

  var valueCumulativeInvestmentChart = $formValues.querySelector('.valueCumulativeInvestmentChart')?.value;
  var removeCumulativeInvestmentChart = $formValues.querySelector('.removeCumulativeInvestmentChart')?.value === 'true';
  var setCumulativeInvestmentChart = removeCumulativeInvestmentChart ? null : $formValues.querySelector('.setCumulativeInvestmentChart')?.value;
  var addCumulativeInvestmentChart = $formValues.querySelector('.addCumulativeInvestmentChart')?.value;
  if(removeCumulativeInvestmentChart || setCumulativeInvestmentChart != null && setCumulativeInvestmentChart !== '')
    vals['setCumulativeInvestmentChart'] = JSON.parse(setCumulativeInvestmentChart);
  if(addCumulativeInvestmentChart != null && addCumulativeInvestmentChart !== '')
    vals['addCumulativeInvestmentChart'] = addCumulativeInvestmentChart;
  var removeCumulativeInvestmentChart = $formValues.querySelector('.removeCumulativeInvestmentChart')?.value;
  if(removeCumulativeInvestmentChart != null && removeCumulativeInvestmentChart !== '')
    vals['removeCumulativeInvestmentChart'] = removeCumulativeInvestmentChart;

  var valueEconomicOutputChart = $formValues.querySelector('.valueEconomicOutputChart')?.value;
  var removeEconomicOutputChart = $formValues.querySelector('.removeEconomicOutputChart')?.value === 'true';
  var setEconomicOutputChart = removeEconomicOutputChart ? null : $formValues.querySelector('.setEconomicOutputChart')?.value;
  var addEconomicOutputChart = $formValues.querySelector('.addEconomicOutputChart')?.value;
  if(removeEconomicOutputChart || setEconomicOutputChart != null && setEconomicOutputChart !== '')
    vals['setEconomicOutputChart'] = JSON.parse(setEconomicOutputChart);
  if(addEconomicOutputChart != null && addEconomicOutputChart !== '')
    vals['addEconomicOutputChart'] = addEconomicOutputChart;
  var removeEconomicOutputChart = $formValues.querySelector('.removeEconomicOutputChart')?.value;
  if(removeEconomicOutputChart != null && removeEconomicOutputChart !== '')
    vals['removeEconomicOutputChart'] = removeEconomicOutputChart;

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

  var valueDisplayName = $formValues.querySelector('.valueDisplayName')?.value;
  var removeDisplayName = $formValues.querySelector('.removeDisplayName')?.value === 'true';
  var setDisplayName = removeDisplayName ? null : $formValues.querySelector('.setDisplayName')?.value;
  var addDisplayName = $formValues.querySelector('.addDisplayName')?.value;
  if(removeDisplayName || setDisplayName != null && setDisplayName !== '')
    vals['setDisplayName'] = setDisplayName;
  if(addDisplayName != null && addDisplayName !== '')
    vals['addDisplayName'] = addDisplayName;
  var removeDisplayName = $formValues.querySelector('.removeDisplayName')?.value;
  if(removeDisplayName != null && removeDisplayName !== '')
    vals['removeDisplayName'] = removeDisplayName;

  var valueContractId = $formValues.querySelector('.valueContractId')?.value;
  var removeContractId = $formValues.querySelector('.removeContractId')?.value === 'true';
  var setContractId = removeContractId ? null : $formValues.querySelector('.setContractId')?.value;
  var addContractId = $formValues.querySelector('.addContractId')?.value;
  if(removeContractId || setContractId != null && setContractId !== '')
    vals['setContractId'] = setContractId;
  if(addContractId != null && addContractId !== '')
    vals['addContractId'] = addContractId;
  var removeContractId = $formValues.querySelector('.removeContractId')?.value;
  if(removeContractId != null && removeContractId !== '')
    vals['removeContractId'] = removeContractId;

  patchContractVals(contractId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'contractId:' + contractId}], vals, target, success, error);
}

function patchContractFilters($formFilters) {
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

    var filterRegion = $formFilters.querySelector('.valueRegion')?.value;
    if(filterRegion != null && filterRegion !== '')
      filters.push({ name: 'fq', value: 'region:' + filterRegion });

    var filterStartDate = $formFilters.querySelector('.valueStartDate')?.value;
    if(filterStartDate != null && filterStartDate !== '')
      filters.push({ name: 'fq', value: 'startDate:' + filterStartDate });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterAbbreviation = $formFilters.querySelector('.valueAbbreviation')?.value;
    if(filterAbbreviation != null && filterAbbreviation !== '')
      filters.push({ name: 'fq', value: 'abbreviation:' + filterAbbreviation });

    var filterInvestmentYearsTotal = $formFilters.querySelector('.valueInvestmentYearsTotal')?.value;
    if(filterInvestmentYearsTotal != null && filterInvestmentYearsTotal !== '')
      filters.push({ name: 'fq', value: 'investmentYearsTotal:' + filterInvestmentYearsTotal });

    var filterInvestmentYears = $formFilters.querySelector('.valueInvestmentYears')?.value;
    if(filterInvestmentYears != null && filterInvestmentYears !== '')
      filters.push({ name: 'fq', value: 'investmentYears:' + filterInvestmentYears });

    var filterInvestmentsPerYear = $formFilters.querySelector('.valueInvestmentsPerYear')?.value;
    if(filterInvestmentsPerYear != null && filterInvestmentsPerYear !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYear:' + filterInvestmentsPerYear });

    var filterInvestmentsPerYearCumulative = $formFilters.querySelector('.valueInvestmentsPerYearCumulative')?.value;
    if(filterInvestmentsPerYearCumulative != null && filterInvestmentsPerYearCumulative !== '')
      filters.push({ name: 'fq', value: 'investmentsPerYearCumulative:' + filterInvestmentsPerYearCumulative });

    var filterAssetClasses = $formFilters.querySelector('.valueAssetClasses')?.value;
    if(filterAssetClasses != null && filterAssetClasses !== '')
      filters.push({ name: 'fq', value: 'assetClasses:' + filterAssetClasses });

    var filterAssetClassesTargetIrr = $formFilters.querySelector('.valueAssetClassesTargetIrr')?.value;
    if(filterAssetClassesTargetIrr != null && filterAssetClassesTargetIrr !== '')
      filters.push({ name: 'fq', value: 'assetClassesTargetIrr:' + filterAssetClassesTargetIrr });

    var filterRevenueStreams = $formFilters.querySelector('.valueRevenueStreams')?.value;
    if(filterRevenueStreams != null && filterRevenueStreams !== '')
      filters.push({ name: 'fq', value: 'revenueStreams:' + filterRevenueStreams });

    var filterEconomicOutputProjections = $formFilters.querySelector('.valueEconomicOutputProjections')?.value;
    if(filterEconomicOutputProjections != null && filterEconomicOutputProjections !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjections:' + filterEconomicOutputProjections });

    var filterTotalGdpImpact = $formFilters.querySelector('.valueTotalGdpImpact')?.value;
    if(filterTotalGdpImpact != null && filterTotalGdpImpact !== '')
      filters.push({ name: 'fq', value: 'totalGdpImpact:' + filterTotalGdpImpact });

    var filterEconomicOutputProjectionsDataset = $formFilters.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
    if(filterEconomicOutputProjectionsDataset != null && filterEconomicOutputProjectionsDataset !== '')
      filters.push({ name: 'fq', value: 'economicOutputProjectionsDataset:' + filterEconomicOutputProjectionsDataset });

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

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterDisplayName = $formFilters.querySelector('.valueDisplayName')?.value;
    if(filterDisplayName != null && filterDisplayName !== '')
      filters.push({ name: 'fq', value: 'displayName:' + filterDisplayName });

    var filterContractId = $formFilters.querySelector('.valueContractId')?.value;
    if(filterContractId != null && filterContractId !== '')
      filters.push({ name: 'fq', value: 'contractId:' + filterContractId });
  }
  return filters;
}

function patchContractVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchContractVals(filters, vals, target, success, error);
}

function patchContractVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/contract?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postContract($formValues, target, success, error) {
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

  var valueRegion = $formValues.querySelector('.valueRegion')?.value;
  if(valueRegion != null && valueRegion !== '')
    vals['region'] = valueRegion;

  var valueStartDate = $formValues.querySelector('.valueStartDate')?.value;
  if(valueStartDate != null && valueStartDate !== '')
    vals['startDate'] = valueStartDate;

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueAbbreviation = $formValues.querySelector('.valueAbbreviation')?.value;
  if(valueAbbreviation != null && valueAbbreviation !== '')
    vals['abbreviation'] = valueAbbreviation;

  var valueInvestmentYearsTotal = $formValues.querySelector('.valueInvestmentYearsTotal')?.value;
  if(valueInvestmentYearsTotal != null && valueInvestmentYearsTotal !== '')
    vals['investmentYearsTotal'] = valueInvestmentYearsTotal;

  var valueInvestmentYears = $formValues.querySelector('.valueInvestmentYears')?.value;
  if(valueInvestmentYears != null && valueInvestmentYears !== '')
    vals['investmentYears'] = JSON.parse(valueInvestmentYears);

  var valueInvestmentsPerYear = $formValues.querySelector('.valueInvestmentsPerYear')?.value;
  if(valueInvestmentsPerYear != null && valueInvestmentsPerYear !== '')
    vals['investmentsPerYear'] = JSON.parse(valueInvestmentsPerYear);

  var valueInvestmentsPerYearCumulative = $formValues.querySelector('.valueInvestmentsPerYearCumulative')?.value;
  if(valueInvestmentsPerYearCumulative != null && valueInvestmentsPerYearCumulative !== '')
    vals['investmentsPerYearCumulative'] = JSON.parse(valueInvestmentsPerYearCumulative);

  var valueAssetClasses = $formValues.querySelector('.valueAssetClasses')?.value;
  if(valueAssetClasses != null && valueAssetClasses !== '')
    vals['assetClasses'] = JSON.parse(valueAssetClasses);

  var valueAssetClassesTargetIrr = $formValues.querySelector('.valueAssetClassesTargetIrr')?.value;
  if(valueAssetClassesTargetIrr != null && valueAssetClassesTargetIrr !== '')
    vals['assetClassesTargetIrr'] = JSON.parse(valueAssetClassesTargetIrr);

  var valueRevenueStreams = $formValues.querySelector('.valueRevenueStreams')?.value;
  if(valueRevenueStreams != null && valueRevenueStreams !== '')
    vals['revenueStreams'] = JSON.parse(valueRevenueStreams);

  var valueEconomicOutputProjections = $formValues.querySelector('.valueEconomicOutputProjections')?.value;
  if(valueEconomicOutputProjections != null && valueEconomicOutputProjections !== '')
    vals['economicOutputProjections'] = JSON.parse(valueEconomicOutputProjections);

  var valueTotalGdpImpact = $formValues.querySelector('.valueTotalGdpImpact')?.value;
  if(valueTotalGdpImpact != null && valueTotalGdpImpact !== '')
    vals['totalGdpImpact'] = valueTotalGdpImpact;

  var valueEconomicOutputProjectionsDataset = $formValues.querySelector('.valueEconomicOutputProjectionsDataset')?.value;
  if(valueEconomicOutputProjectionsDataset != null && valueEconomicOutputProjectionsDataset !== '')
    vals['economicOutputProjectionsDataset'] = JSON.parse(valueEconomicOutputProjectionsDataset);

  var valueCumulativeInvestmentChart = $formValues.querySelector('.valueCumulativeInvestmentChart')?.value;
  if(valueCumulativeInvestmentChart != null && valueCumulativeInvestmentChart !== '')
    vals['cumulativeInvestmentChart'] = JSON.parse(valueCumulativeInvestmentChart);

  var valueEconomicOutputChart = $formValues.querySelector('.valueEconomicOutputChart')?.value;
  if(valueEconomicOutputChart != null && valueEconomicOutputChart !== '')
    vals['economicOutputChart'] = JSON.parse(valueEconomicOutputChart);

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

  var valueDisplayName = $formValues.querySelector('.valueDisplayName')?.value;
  if(valueDisplayName != null && valueDisplayName !== '')
    vals['displayName'] = valueDisplayName;

  var valueContractId = $formValues.querySelector('.valueContractId')?.value;
  if(valueContractId != null && valueContractId !== '')
    vals['contractId'] = valueContractId;

  fetch(
    '/en-us/api/contract'
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

function postContractVals(vals, target, success, error) {
  fetch(
    '/en-us/api/contract'
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

async function deleteContract(target, contractId, success, error) {
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
    '/en-us/api/contract/' + encodeURIComponent(contractId)
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

async function putimportContract($formValues, target, contractId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportContractVals(JSON.parse(json), target, success, error);
}

function putimportContractVals(json, target, success, error) {
  fetch(
    '/en-us/api/contract-import'
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

async function deletefilterContract(target, success, error) {
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
    '/en-us/api/contract'
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
