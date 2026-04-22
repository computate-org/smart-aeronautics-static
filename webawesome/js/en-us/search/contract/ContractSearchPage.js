Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeContract')?.addEventListener('change', (event) => {
    facetRangeChange('Contract', event.target.value);
  });

  document.querySelector('#pageSelectSortContract_pk')?.addEventListener('change', (event) => {
    sort('Contract', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'pk', true);
  });
  document.querySelector('#pageStatsContract_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'pk', false);
  });

  document.querySelector('#pageSelectSortContract_created')?.addEventListener('change', (event) => {
    sort('Contract', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'created', true);
  });
  document.querySelector('#pageStatsContract_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'created', false);
  });

  document.querySelector('#pageSelectSortContract_modified')?.addEventListener('change', (event) => {
    sort('Contract', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'modified', true);
  });
  document.querySelector('#pageStatsContract_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'modified', false);
  });

  document.querySelector('#pageSelectSortContract_archived')?.addEventListener('change', (event) => {
    sort('Contract', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'archived', true);
  });
  document.querySelector('#pageStatsContract_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'archived', false);
  });

  document.querySelector('#pageSelectSortContract_region')?.addEventListener('change', (event) => {
    sort('Contract', 'region', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_region')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'region', true);
  });
  document.querySelector('#pageStatsContract_region')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'region', false);
  });

  document.querySelector('#pageSelectSortContract_startDate')?.addEventListener('change', (event) => {
    sort('Contract', 'startDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_startDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'startDate', true);
  });
  document.querySelector('#pageStatsContract_startDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'startDate', false);
  });

  document.querySelector('#pageSelectSortContract_name')?.addEventListener('change', (event) => {
    sort('Contract', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'name', true);
  });
  document.querySelector('#pageStatsContract_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'name', false);
  });

  document.querySelector('#pageSelectSortContract_abbreviation')?.addEventListener('change', (event) => {
    sort('Contract', 'abbreviation', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_abbreviation')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'abbreviation', true);
  });
  document.querySelector('#pageStatsContract_abbreviation')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'abbreviation', false);
  });

  document.querySelector('#pageSelectSortContract_investmentYearsTotal')?.addEventListener('change', (event) => {
    sort('Contract', 'investmentYearsTotal', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_investmentYearsTotal')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'investmentYearsTotal', true);
  });
  document.querySelector('#pageStatsContract_investmentYearsTotal')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'investmentYearsTotal', false);
  });

  document.querySelector('#pageSelectSortContract_investmentYears')?.addEventListener('change', (event) => {
    sort('Contract', 'investmentYears', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_investmentYears')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'investmentYears', true);
  });
  document.querySelector('#pageStatsContract_investmentYears')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'investmentYears', false);
  });

  document.querySelector('#pageSelectSortContract_investmentsPerYear')?.addEventListener('change', (event) => {
    sort('Contract', 'investmentsPerYear', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_investmentsPerYear')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'investmentsPerYear', true);
  });
  document.querySelector('#pageStatsContract_investmentsPerYear')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'investmentsPerYear', false);
  });

  document.querySelector('#pageSelectSortContract_investmentsPerYearCumulative')?.addEventListener('change', (event) => {
    sort('Contract', 'investmentsPerYearCumulative', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_investmentsPerYearCumulative')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'investmentsPerYearCumulative', true);
  });
  document.querySelector('#pageStatsContract_investmentsPerYearCumulative')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'investmentsPerYearCumulative', false);
  });

  document.querySelector('#pageSelectSortContract_assetClasses')?.addEventListener('change', (event) => {
    sort('Contract', 'assetClasses', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_assetClasses')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'assetClasses', true);
  });
  document.querySelector('#pageStatsContract_assetClasses')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'assetClasses', false);
  });

  document.querySelector('#pageSelectSortContract_assetClassesTargetIrr')?.addEventListener('change', (event) => {
    sort('Contract', 'assetClassesTargetIrr', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_assetClassesTargetIrr')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'assetClassesTargetIrr', true);
  });
  document.querySelector('#pageStatsContract_assetClassesTargetIrr')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'assetClassesTargetIrr', false);
  });

  document.querySelector('#pageSelectSortContract_revenueStreams')?.addEventListener('change', (event) => {
    sort('Contract', 'revenueStreams', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_revenueStreams')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'revenueStreams', true);
  });
  document.querySelector('#pageStatsContract_revenueStreams')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'revenueStreams', false);
  });

  document.querySelector('#pageSelectSortContract_economicOutputProjections')?.addEventListener('change', (event) => {
    sort('Contract', 'economicOutputProjections', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_economicOutputProjections')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'economicOutputProjections', true);
  });
  document.querySelector('#pageStatsContract_economicOutputProjections')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'economicOutputProjections', false);
  });

  document.querySelector('#pageSelectSortContract_totalGdpImpact')?.addEventListener('change', (event) => {
    sort('Contract', 'totalGdpImpact', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_totalGdpImpact')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'totalGdpImpact', true);
  });
  document.querySelector('#pageStatsContract_totalGdpImpact')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'totalGdpImpact', false);
  });

  document.querySelector('#pageSelectSortContract_economicOutputProjectionsDataset')?.addEventListener('change', (event) => {
    sort('Contract', 'economicOutputProjectionsDataset', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_economicOutputProjectionsDataset')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'economicOutputProjectionsDataset', true);
  });
  document.querySelector('#pageStatsContract_economicOutputProjectionsDataset')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'economicOutputProjectionsDataset', false);
  });

  document.querySelector('#pageSelectSortContract_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Contract', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsContract_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortContract_classSimpleName')?.addEventListener('change', (event) => {
    sort('Contract', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsContract_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortContract_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Contract', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsContract_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortContract_sessionId')?.addEventListener('change', (event) => {
    sort('Contract', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'sessionId', true);
  });
  document.querySelector('#pageStatsContract_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortContract_userKey')?.addEventListener('change', (event) => {
    sort('Contract', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'userKey', true);
  });
  document.querySelector('#pageStatsContract_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'userKey', false);
  });

  document.querySelector('#pageSelectSortContract_saves')?.addEventListener('change', (event) => {
    sort('Contract', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'saves', true);
  });
  document.querySelector('#pageStatsContract_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'saves', false);
  });

  document.querySelector('#pageSelectSortContract_objectTitle')?.addEventListener('change', (event) => {
    sort('Contract', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'objectTitle', true);
  });
  document.querySelector('#pageStatsContract_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortContract_displayPage')?.addEventListener('change', (event) => {
    sort('Contract', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'displayPage', true);
  });
  document.querySelector('#pageStatsContract_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortContract_editPage')?.addEventListener('change', (event) => {
    sort('Contract', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'editPage', true);
  });
  document.querySelector('#pageStatsContract_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'editPage', false);
  });

  document.querySelector('#pageSelectSortContract_userPage')?.addEventListener('change', (event) => {
    sort('Contract', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'userPage', true);
  });
  document.querySelector('#pageStatsContract_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'userPage', false);
  });

  document.querySelector('#pageSelectSortContract_download')?.addEventListener('change', (event) => {
    sort('Contract', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'download', true);
  });
  document.querySelector('#pageStatsContract_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'download', false);
  });

  document.querySelector('#pageSelectSortContract_objectSuggest')?.addEventListener('change', (event) => {
    sort('Contract', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsContract_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortContract_objectText')?.addEventListener('change', (event) => {
    sort('Contract', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'objectText', true);
  });
  document.querySelector('#pageStatsContract_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'objectText', false);
  });

  document.querySelector('#pageSelectSortContract_solrId')?.addEventListener('change', (event) => {
    sort('Contract', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'solrId', true);
  });
  document.querySelector('#pageStatsContract_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'solrId', false);
  });

  document.querySelector('#pageSelectSortContract_displayName')?.addEventListener('change', (event) => {
    sort('Contract', 'displayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_displayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'displayName', true);
  });
  document.querySelector('#pageStatsContract_displayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'displayName', false);
  });

  document.querySelector('#pageSelectSortContract_contractId')?.addEventListener('change', (event) => {
    sort('Contract', 'contractId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsContract_contractId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Contract', 'contractId', true);
  });
  document.querySelector('#pageStatsContract_contractId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Contract', 'contractId', false);
  });
          document.querySelector('#fqContract_created')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_created')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_created')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_archived')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_region')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_region')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_region')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_region')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_region')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_region')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_name')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_name')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_name')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_abbreviation')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_abbreviation')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_abbreviation')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_abbreviation')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_abbreviation')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_abbreviation')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_displayPage')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_editPage')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_userPage')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_download')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_download')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_download')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
          document.querySelector('#fqContract_contractId')?.addEventListener('change', (event) => {
            fqChange('Contract', event.currentTarget, facetChangeContractSuccess, facetChangeContractError);
          });
          document.querySelector('#buttonFacetContract_contractId')?.addEventListener('click', (event) => {
            facetFieldChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotContract_contractId')?.addEventListener('change', (event) => {
            facetPivotChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapContract_contractId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartContract_contractId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Contract', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndContract_contractId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Contract', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteContract')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var contractId =  event.currentTarget.getAttribute('data-contractId');
      deleteContract(
          event.currentTarget
          , contractId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterContract')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterContract(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
