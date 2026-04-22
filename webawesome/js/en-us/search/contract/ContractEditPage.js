Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Contract_Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Contract_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Contract_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Contract_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH region
          document.querySelector('#Contract_Page_region')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_region');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setRegion', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_region')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_region')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_region');
            const valid = form.reportValidity();
          });

          // PATCH startDate
          document.querySelector('#Contract_Page_startDate')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_startDate');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                    , 'setStartDate', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Contract_Page_startDate')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_startDate')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_startDate');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#Contract_Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_name')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH abbreviation
          document.querySelector('#Contract_Page_abbreviation')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_abbreviation');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setAbbreviation', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_abbreviation')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_abbreviation')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_abbreviation');
            const valid = form.reportValidity();
          });

          // PATCH investmentYearsTotal
          document.querySelector('#Contract_Page_investmentYearsTotal')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_investmentYearsTotal');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setInvestmentYearsTotal', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_investmentYearsTotal')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_investmentYearsTotal')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_investmentYearsTotal');
            const valid = form.reportValidity();
          });

          // PATCH investmentYears
          document.querySelector('#Contract_Page_investmentYears')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_investmentYears');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setInvestmentYears', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_investmentYears')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_investmentYears')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_investmentYears');
            const valid = form.reportValidity();
          });

          // PATCH investmentsPerYear
          document.querySelector('#Contract_Page_investmentsPerYear')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_investmentsPerYear');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setInvestmentsPerYear', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_investmentsPerYear')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_investmentsPerYear')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_investmentsPerYear');
            const valid = form.reportValidity();
          });

          // PATCH investmentsPerYearCumulative
          document.querySelector('#Contract_Page_investmentsPerYearCumulative')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_investmentsPerYearCumulative');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setInvestmentsPerYearCumulative', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_investmentsPerYearCumulative')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_investmentsPerYearCumulative')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_investmentsPerYearCumulative');
            const valid = form.reportValidity();
          });

          // PATCH assetClasses
          document.querySelector('#Contract_Page_assetClasses')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_assetClasses');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setAssetClasses', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_assetClasses')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_assetClasses')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_assetClasses');
            const valid = form.reportValidity();
          });

          // PATCH assetClassesTargetIrr
          document.querySelector('#Contract_Page_assetClassesTargetIrr')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_assetClassesTargetIrr');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setAssetClassesTargetIrr', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_assetClassesTargetIrr')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_assetClassesTargetIrr')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_assetClassesTargetIrr');
            const valid = form.reportValidity();
          });

          // PATCH revenueStreams
          document.querySelector('#Contract_Page_revenueStreams')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_revenueStreams');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setRevenueStreams', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_revenueStreams')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_revenueStreams')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_revenueStreams');
            const valid = form.reportValidity();
          });

          // PATCH economicOutputProjections
          document.querySelector('#Contract_Page_economicOutputProjections')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_economicOutputProjections');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setEconomicOutputProjections', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_economicOutputProjections')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_economicOutputProjections')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_economicOutputProjections');
            const valid = form.reportValidity();
          });

          // PATCH totalGdpImpact
          document.querySelector('#Contract_Page_totalGdpImpact')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_totalGdpImpact');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setTotalGdpImpact', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_totalGdpImpact')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_totalGdpImpact')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_totalGdpImpact');
            const valid = form.reportValidity();
          });

          // PATCH economicOutputProjectionsDataset
          document.querySelector('#Contract_Page_economicOutputProjectionsDataset')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_economicOutputProjectionsDataset');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setEconomicOutputProjectionsDataset', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_economicOutputProjectionsDataset')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_economicOutputProjectionsDataset')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_economicOutputProjectionsDataset');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Contract_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Contract_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Contract_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Contract_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#Contract_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#Contract_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#Contract_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH displayName
          document.querySelector('#Contract_Page_displayName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayName');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setDisplayName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_displayName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_displayName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayName');
            const valid = form.reportValidity();
          });

          // PATCH contractId
          document.querySelector('#Contract_Page_contractId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_contractId');
            const valid = form.checkValidity();
            if(valid) {
              patchContractVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'contractId:' + event.currentTarget.getAttribute('data-contractId') }]
                  , 'setContractId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Contract_Page_contractId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Contract_Page_contractId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_contractId');
            const valid = form.reportValidity();
          });
});
