$(document).ready(function () {

    $('#container').jstree({
        'core' : {
            'data' : [
                {
                    "text" : "Data Transform",
                    "icon" : "/custom/jstree/images/gear_combination.png",
                    "children" : [
                        {
                            "text" : "Data Loading",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "Linear Transform",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "Inverse Transform",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "Select Columns",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "Split Data",
                            "icon" : "/custom/jstree/images/gear.png"
                        }
                    ]
                },
                {
                    "text" : "Classifiers",
                    "icon" : "/custom/jstree/images/gear_combination.png",
                    "children" : [
                        {
                            "text" : "Score Model",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "DDAG",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "OneVSAll",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "OneVSOne",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "Rocchio",
                            "icon" : "/custom/jstree/images/gear.png"
                        },
                        {
                            "text" : "Bayesian",
                            "icon" : "/custom/jstree/images/gear_combination.png",
                            "children" : [
                                {
                                    "text" : "MultinomialNBayes",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "MultivariateNormals",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "NaiveBayes",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "NBUpdateable",
                                    "icon" : "/custom/jstree/images/gear.png"
                                }
                            ]
                        },
                        {
                            "text" : "Binary Classifiers",
                            "icon" : "/custom/jstree/images/gear_combination.png",
                            "children" : [
                                {
                                    "text" : "AdaBoostM1PL",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "ArcX4",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "Bagging",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "EmphasisBoost",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "LogitBoostPL",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "ModestAdaBoost",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "SAMME",
                                    "icon" : "/custom/jstree/images/gear.png"
                                }
                            ]
                        },
                        {
                            "text" : "Multiple Classifiers",
                            "icon" : "/custom/jstree/images/gear_combination.png",
                            "children" :[
                                {
                                    "text" : "Stacking",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "WaggingNormal",
                                    "icon" : "/custom/jstree/images/gear.png"
                                }
                            ]
                        }
                    ]
                },
                {
                    "text" : "Clustering",
                    "icon" : "/custom/jstree/images/gear_combination.png",
                    "children" :[
                        {
                            "text" : "Basic Clustering",
                            "icon" : "/custom/jstree/images/gear_combination.png",
                            "children" :[
                                {
                                    "text" : "PAM",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "DBSCAN",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "EMGaussianMixture",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                            ]

                        },
                        {
                            "text" : "Hierarchical Clustering",
                            "icon" : "/custom/jstree/images/gear_combination.png",
                            "children" : [
                                {
                                    "text" : "Divisive Global",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "Divisive Local",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "NNChainHAC",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "PriorityHAC",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "SimpleHAC",
                                    "icon" : "/custom/jstree/images/gear.png"
                                }
                            ]
                        },
                        {
                            "text" : "KMeans Clustering",
                            "icon" : "/custom/jstree/images/gear_combination.png",
                            "children" : [
                                {
                                    "text" : "ElkanKernelKMeans",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "GMeans",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "HamerlyKMeans",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "KMeansPDN",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "LloydKernelKMeans",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "MiniBatchKMeans",
                                    "icon" : "/custom/jstree/images/gear.png"
                                },
                                {
                                    "text" : "XMeans",
                                    "icon" : "/custom/jstree/images/gear.png"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    });

    var operatorI = 0;
    $('#container').on("select_node.jstree", function (e, data) {
        var operatorId = operatorI;
        var operatorData;
        var dataLoading = {
            top: 60,
            left: 500,
            properties: {
                title: data.node.text,
                outputs: {
                    output_1: {
                        label: 'Output',
                    }
                }
            }
        };
        var scoreModel = {
            top: 60,
            left: 500,
            properties: {
                title: data.node.text,
                inputs: {
                    input_1: {
                        label: 'treaned',
                    },
                    input_2: {
                        label: 'scored'
                    }
                },
                outputs: {
                    output_1: {
                        label: 'result',
                    }
                }
            }
        };
        var splitData = {
            top: 60,
            left: 500,
            properties: {
                title: data.node.text,
                inputs: {
                    input_1: {
                        label: 'Input',
                    }
                },
                outputs: {
                    output_1: {
                        label: 'training',
                    },
                    output_2: {
                        label: 'scoring'
                    }
                }
            }
        };
        if(data.node.text == 'Data Loading'){
             operatorData = dataLoading;
        }
        else if(data.node.text == 'Split Data'){
            operatorData = splitData
        }
        else if(data.node.text == 'Score Model'){
            operatorData = scoreModel
        }
        else {
            operatorData = {
                top: 60,
                left: 500,
                properties: {
                    title: data.node.text,
                    inputs: {
                        input_1: {
                            label: 'Input',
                        }
                    },
                    outputs: {
                        output_1: {
                            label: 'Output',
                        }
                    }
                }
            };
        }

        operatorI++;
        /* ето тука е мястото където се създава нов компонент, т.е. може и динамичен Json да се подаде на мястото на operatorData.*/
        $('#test').flowchart('createOperator', operatorId, operatorData);
    });

    // масив във който ще пазим елементите на избраните от потребителя модали
    var dataComponentsList = [];
    var dict = [];
    dict.push(
        {
            key :  "Data Loading",
            value: "DataLoading"
        },
        {
            key :  "Linear Transform",
            value: "LinearTransform"
        },
        {
            key :  "Inverse Transform",
            value: "InverseTransform"
        },
        {
            key :  "Split Data",
            value: "SplitData"
        },
        {
            key: "Select Columns",
            value: "SelectColumns"
        },
        {
            key :  "PAM",
            value: "PamClustering"
        },
        {
            key :  "DBSCAN",
            value: "DbscanClustering"
        },
        {
            key :  "EMGaussianMixture",
            value: "EMGausianMixtureClustering"
        },
        {
            key :  "Divisive Global",
            value: "DivisiveGlobalClustering"
        },
        {
            key :  "Divisive Local",
            value: "DivisiveLocalClustering"
        },
        {
            key :  "NNChainHAC",
            value: "NNChainHACClustering"
        },
        {
            key :  "PriorityHAC",
            value: "PriorityHACClustering"
        },
        {
            key: "Score Model",
            value: "ScoreModel"
        },
        {
            key :  "SimpleHAC",
            value: "SimpleHACClustering"
        },
        {
            key :  "ElkanKernelKMeans",
            value: "ElkanKernelKMeansClustering"
        },
        {
            key :  "GMeans",
            value: "GMeansClustering"
        },
        {
            key :  "HamerlyKMeans",
            value: "HamerlyKMeansClustering"
        },
        {
            key :  "KMeansPDN",
            value: "KMeansPDNClustering"
        },
        {
            key :  "LloydKernelKMeans",
            value: "LloydKernelKMeans"
        },
        {
            key :  "MiniBatchKMeans",
            value: "MiniBatchKMeans"
        },
        {
            key :  "XMeans",
            value: "XMeansClustering"
        },
        {
            key :  "DDAG",
            value: "DDAGClassifier"
        },
        {
            key :  "OneVSAll",
            value: "OneVSAllClassifier"
        },
        {
            key :  "OneVSOne",
            value: "OneVSOneClassifier"
        },
        {
            key : "Rocchio",
            value: "RocchioClassifier"
        },
        {
            key : "MultinomialNBayes",
            value : "MultinomialNBayesClassifier"
        },
        {
            key : "MultivariateNormals",
            value: "MultivariateNormalsClassifier"
        },
        {
            key: "NaiveBayes",
            value: "NaiveBayesClassifier"
        },
        {
            key: "NBUpdateable",
            value: "NBUpdateableClassifier"
        },
        {
            key: "AdaBoostM1PL",
            value: "AdaBoostM1PLClassifier"
        },
        {
            key: "ArcX4",
            value: "ArcX4Classifier"
        },
        {
            key: "Bagging",
            value: "BaggingClassifier"
        },
        {
            key: "EmphasisBoost",
            value: "EmphasisBoostClassifier"
        },
        {
            key:   "LogitBoostPL",
            value: "LogitBoostPLClassifier"
        },
        {
            key: "ModestAdaBoost",
            value: "ModestAdaBoostClassifier"
        },
        {
            key: "SAMME",
            value: "SAMMEClassifier"
        },
        {
            key: "Stacking",
            value: "StackingClassifier"
        },
        {
            key: "WaggingNormal",
            value: "WaggingNormalClassifier"
        });


    $('#test').flowchart({
        onOperatorSelect: function (operatorId) {
            var operatorTitle = $('#test').flowchart('getOperatorTitle', operatorId);

            $('.panel-body.components').each(function () {
                if($(this).css('visibility') != 'hidden'){
                    $(this).hide();
                }
            });
            for(var i = 0; i < dict.length; i++){
                if(operatorTitle == dict[i].key && operatorTitle == 'Data Loading'){
                    $('#ComponentName').text(dict[i].key + 'Properties');
                    $('#' + dict[i].value).show();
                    if ($('.files option').length == 1){
                        ajaxGetDataLoadingComponent();
                    }
                    if(dataComponentsList.includes(dict[i].value) == false)
                        dataComponentsList.push(dict[i].value);
                }
                else if(operatorTitle == dict[i].key){
                    $('#ComponentName').text(dict[i].key + ' Properties');
                    $('#' + dict[i].value).show();
                    if(dataComponentsList.includes(dict[i].value) == false)
                        dataComponentsList.push(dict[i].value);
                }
            }
        }
    })

    $('#create_operator').click(function () {
        // масив във който ще взимаме избраните параметри за всеки модал, след това този масив се подава на сървиса
        let componentValues = []

        var selectedFileId = $('.files option:selected').val();

        let dt = $('#test').flowchart('getData'); // този списък може да се обходи, и да се извадят имената на компонентите и след това да се сравни за съвпадения със dataComponentsList, със сигурност ще има много по малко проверки
        $('#flowchart_data').val(JSON.stringify(dt, null, 2));

        httpRequest = new XMLHttpRequest();

        if (!httpRequest){
            alert('Cannot create an XMLHTTP instance');
            return false;
        }

        dataComponentsList.forEach(function (entry) {
            if (entry == 'DataLoading'){
                let dataLoadingComp = {
                    setFileName: $('#ctr :selected').text()
                };
                componentValues.push({ "Data Loading": dataLoadingComp });
            }
            else if(entry == 'LinearTransform') {
                let linearTransformCom = {
                    startPoint: $('#startPointInput').val(),
                    endPoint: $('#endPointInput').val()
                };
                componentValues.push({ "Linear Transform": linearTransformCom });
            }
            else if(entry == 'SelectColumns'){
                var selectedColumns = [];
                    selectedColumns = [];
                    $('#ddlSelectedColumns option').map(function(i, item) {
                        let currentValue = {
                            key: item.value,
                            value: item.text
                        };
                        selectedColumns.push({ "select value" : currentValue });
                    });
                componentValues.push({ "Select Columns":  selectedColumns});
            }
            else if(entry == 'PamClustering'){
                let pamClustering = {
                    setClustersCount: $('#clustersCount').val(),
                    setMaxIterations: $('#maxIterations').val(),
                    setDistanceMetrics: $('#pam_distance :selected').val(),
                    setSelectionMethod: $('#pam_seed :selected').val()
                };
                componentValues.push({ "PAM": pamClustering });
            }
            /*else if(entry == 'ScoreModel'){
                let scoreModelres = {
                    sm_traned_set: $('#sm_traned_set').val(),
                    sm_scored_set: $('#sm_scored_set').val(),
                }
                componentValues.push({ "Score Model": scoreModelres });
            }*/
            else if(entry == 'DbscanClustering'){
                let dbscanClustering = {
                    minPts: $('#minPts').val(),
                    eps: $('#eps').val(),
                    distanceMetrics: $('#dbscan_distance :selected').val()
                };
                componentValues.push({ "DBSCAN": dbscanClustering });
            }
            else if(entry == 'EMGausianMixtureClustering'){
                let emGaussianMixtureClustering = {
                    clustersCount: $('#clustersCountGM').val(),
                    seedSelectionMethods: $('#gm_seed :selected').val()
                };
                componentValues.push({ "EMGaussianMixture" : emGaussianMixtureClustering });
            }
            else if(entry == 'DivisiveGlobalClustering'){
                let dgClusterer = {
                    clustersCountDG: $('#clustersCountDG').val(),
                    distanceMetrics: $('#divgloval_distance :selected').val()
                    //seedSelectionMethods: $('#divglobal_seed :selected').val()
                };
                componentValues.push({ 'Divisive Global' : dgClusterer });
            }
            else if(entry == 'DivisiveLocalClustering'){
                let dlClusterer = {
                    clustersCountDL: $('#localClusters').val(),
                    distanceMetrics: $('#divlocal_distance :selected').val(),
                    //seedSelectionMethods: $('#divlocal_seed :selected').text()
                };
                componentValues.push({ 'Divisive Local' : dlClusterer });
            }
            else if(entry == 'NNChainHACClustering'){
                let NNChainHAC = {
                    lowK: $('#lowK').val(),
                    hightK: $('#hightK').val()
                };
                componentValues.push({ 'NNChainHAC' : NNChainHAC });
            }
            else if(entry == 'PriorityHACClustering'){
                let PriorityHAC = {
                    clustersPHAG: $('#clustersPHAG').val(),
                    distanceMetrics: $('#priorityhac_distance :selected').val()  //priorityhac_distance
                };
                componentValues.push({ 'PriorityHAC' : PriorityHAC });
            }
            else if(entry == 'SimpleHACClustering'){
                let SimpleHAC = {
                    clustersSHAG: $('#clustersSHAG').val(),
                    distanceMetrics: $('#simplehac_distance :selected').val()
                };
                componentValues.push({ 'SimpleHAC' : SimpleHAC });
            }
            else if(entry == 'ElkanKernelKMeansClustering'){
                let ElkanKernelKMeans = {
                    clustersEK: $('#clustersEK').val()
                };
                componentValues.push({ 'ElkanKernelKMeans' : ElkanKernelKMeans });
            }
            else if(entry == 'GMeansClustering'){
                let GMeans = {
                    lowGM: $('#lowGM').val(),
                    hightGM: $('#hightGM').val(),
                    distanceMetrics: $('#gmeans_distance :selected').val(),
                    seedSelectionMethods: $('#gmeans_seed :selected').val()
                };
                componentValues.push({ 'GMeans' : GMeans });
            }
            else if(entry == 'HamerlyKMeansClustering'){
                let HamerlyKMeans = {
                    clustersHamerly: $('#clustersHamerly').val(),
                    distanceMetrics: $('#hamerly_distance :selected').val(),
                    seedSelectionMethods: $('#hamerly_seed :selected').val()
                };
                componentValues.push({ 'HamerlyKMeans' : HamerlyKMeans });
            }
            else if(entry == 'KMeansPDNClustering'){
                let KMeansPDN = {
                    clustersKMeansPDN: $('#clustersKMeansPDN').val(),
                    distanceMetrics: $('#kmeanspdn_distance :selected').val(),
                    seedSelectionMethods: $('#kmeanspdn_seed :selected').val()
                };
                componentValues.push({ 'KMeansPDN' : KMeansPDN });
            }
            else if(entry == 'LloydKernelKMeans'){
                let LloydKernelKMeans = {
                    clustersLK: $('#clustersLK').val()
                };
                componentValues.push({ 'LloydKernelKMeans' : LloydKernelKMeans });
            }
            else if(entry == 'MiniBatchKMeans'){
                let MiniBatchKMeans = {
                    clustersMBK: $('#clustersMBK').val(),
                    batchSize: $('#minibatch_size').val(),
                    iterations: $('#minibatch_iterations').val(),
                    distanceMetrics: $('#mbkmeans_distance :selected').val(),
                    seedSelectionMethods: $('#mbkmeans_seed :selected').val()
                };
                componentValues.push({ 'MiniBatchKMeans' : MiniBatchKMeans });
            }
            else if(entry == 'XMeansClustering'){
                let XMeans = {
                    lowX: $('#lowX').val(),
                    hightX: $('#hightX').val(),
                    distanceMetrics: $('#xmeans_distance :selected').val(),
                    seedSelectionMethods: $('#xmeans_seed :selected').val()
                };
                componentValues.push({ 'XMeans' : XMeans });
            }
            else if(entry == 'DDAGClassifier'){
                let DDAG = {
                    ddagtrain: $('#ddag_train_set').val(),
                    ddagtest: $('#ddag_test_set').val(),
                };
                componentValues.push( { "DDAG" : DDAG});
            }
            else if(entry == 'OneVSAllClassifier'){
                let OneVSAll = {
                    onevsallTrain:  $('#onevsall_train_set').val(),
                    onevsallTest: $('#onevsall_test_set').val()
                };
                componentValues.push({ "OneVSAll" : OneVSAll});
            }
            else if(entry == 'OneVSOneClassifier'){
                let OneVSOne = {
                    onevsoneTrain: $('#onevsone_train_set').val(),
                    onevsoneTest: $('#onevsone_test_set').val()
                };
                componentValues.push({ "OneVSOne" : OneVSOne });
            }
            else if(entry == 'RocchioClassifier'){
                let Rocchio = {
                    rocchioTrain: $('#rocchio_train_set').val(),
                    rocchioTest: $('#rocchio_test_set').val()
                };
                componentValues.push({ "Rocchio" : Rocchio });
            }
            else if(entry == 'MultinomialNBayesClassifier'){
                let MultinomialNBayes = {
                    mnbTrain: $('#mnb_train_set').val(),
                    mnbTest: $('#mnb_test_set').val()
                };
                componentValues.push({ "MultinomialNBayes" : MultinomialNBayes });
            }
            else if(entry == 'MultivariateNormalsClassifier'){
                let MultivariateNormals = {
                    multivariatenormalsTrain: $('#multivariatenormals_train_set').val(),
                    multivariatenormalsTest: $('#multivariatenormals_test_set').val()
                };
                componentValues.push({ "MultivariateNormals" : MultivariateNormals });
            }
            else if(entry == 'NaiveBayesClassifier'){
                let NaiveBayes = {
                    naivebayesTrain: $('#naivebayes_train_set').val(),
                    naivebayesTest: $('#naivebayes_test_set').val()
                };
                componentValues.push({ "NaiveBayes" : NaiveBayes });
            }
            else if(entry == 'NBUpdateableClassifier'){
                let NBUpdateable = {
                    nbupdateableTrain: $('#nbupdateable_train_set').val(),
                    nbupdateableTest: $('#nbupdateable_test_set').val()
                };
                componentValues.push({ "NBUpdateable" : NBUpdateable });
            }
            else if(entry == 'AdaBoostM1PLClassifier'){
                let AdaBoostM1PL = {
                    adaboostm1plTrain: $('#adaboostm1pl_train_set').val(),
                    adaboostm1plTest: $('#adaboostm1pl_test_set').val()
                };
                componentValues.push({ "AdaBoostM1PL" : AdaBoostM1PL });
            }
            else if(entry == 'ArcX4Classifier'){
                let ArcX4 = {
                    arcX4Train : $('#arcX4_train_set').val(),
                    arcX4Test :  $('#arcX4_test_set').val()
                };
                componentValues.push({"ArcX4" : ArcX4});
            }
            else if(entry == 'BaggingClassifier'){
                let Bagging = {
                    baggingTrain : $('#bagging_train_set').val(),
                    baggingTest: $('#bagging_test_set').val()
                };
                componentValues.push({"Bagging" : Bagging});
            }
            else if(entry == 'EmphasisBoostClassifier'){
                let EmphasisBoost = {
                    emphasisBoostTrain : $('#emphasis_train_set').val(),
                    emphasisBoostTest : $('#emphasis_test_set').val()
                };
                componentValues.push({ "EmphasisBoost" : EmphasisBoost });
            }
            else if(entry == 'LogitBoostPLClassifier'){
                let LogitBoostPL = {
                    logitBoostPLTrain: $('#lbPL_train_set').val(),
                    logitBoostPLTest: $('#lbPL_test_set').val()
                };
                componentValues.push({ "LogitBoostPL" : LogitBoostPL });
            }
            else if(entry == 'ModestAdaBoostClassifier'){
                let ModestAdaBoost = {
                    modestAdaBoostTrain: $('#mab_train_set').val(),
                    modestAdaBoostTest: $('#mab_test_set').val(),
                };
                componentValues.push({ "ModestAdaBoost" : ModestAdaBoost });
            }
            else if(entry == 'SAMMEClassifier'){
                let SAMME = {
                    sammeTrain: $('#samme_train_set').val(),
                    sammeTest: $('#samme_test_set').val()
                };
                componentValues.push({ "SAMME" : SAMME });
            }
            else if(entry == 'StackingClassifier'){
                let Stacking = {
                    stackingTrain: $('#stacking_train_set').val(),
                    stackingTest: $('#stacking_test_set').val()
                };
                componentValues.push({ "Stacking" : Stacking });
            }
            else if(entry == 'WaggingNormalClassifier'){
                let WaggingNormal = {
                    wnTrain: $('#wn_train_set').val(),
                    wnTest: $('#wn_test_set').val()
                };
                componentValues.push({ "WaggingNormal" : WaggingNormal });
            }
            else if(entry == 'SplitData'){
                let SplitData = {
                    training: $('#sp_train_set').val(),
                    scorring: $('#sp_test_set').val()
                };
                componentValues.push({ "Split Data" : SplitData});
            }
        });

        var d = { dt,  componentValues: componentValues};

        httpRequest.open('POST', "/dataflow", false);
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.send(JSON.stringify(d));
    });
    
    // Do Get Data loading component
    function ajaxGetDataLoadingComponent() {
        $.ajax({
            type: "GET",
            url: "/modal",
            success: function (data) {
                // fill data to Modal Body
                fillDataLoadingComponents(data);
            },
            errror: function (e) {
                fillDataLoadingComponents(null);
            }
        });
    }

    function fillDataLoadingComponents(data) {
        if (data != null){
            $.each(data, function (i, value) {
                $('.files').append($('<option>').text(value.fileName).attr('value', value.id));
            });
        }
        else {
            $(".modal-body #greetingId").text("Can Not Get Data from Server!");
        }
    }


    // Start Luna Function
    // Handle minimalize left menu
    $('.left-nav-toggle a').on('click', function(event){
        event.preventDefault();
        $("body").toggleClass("nav-toggle");
    });

    // Hide all open sub nav menu list
    $('.nav-second').on('show.bs.collapse', function () {
        $('.nav-second.in').collapse('hide');
    });

    // Handle panel toggle
    $('.panel-toggle').on('click', function(event){
        event.preventDefault();
        var hpanel = $(event.target).closest('div.panel');
        var icon = $(event.target).closest('i');
        var body = hpanel.find('div.panel-body');
        var footer = hpanel.find('div.panel-footer');
        body.slideToggle(300);
        footer.slideToggle(200);

        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        hpanel.toggleClass('').toggleClass('panel-collapse');
        setTimeout(function () {
            hpanel.resize();
            hpanel.find('[id^=map-]').resize();
        }, 50);
    });

    // Handle panel close
    $('.panel-close').on('click', function(event){
        event.preventDefault();
        var hpanel = $(event.target).closest('div.panel');
        hpanel.remove();
    });
    // End Funa function

    // start select columns modal
    // Loaded data from Restfull Service
    // Loaded data from Restfull Service
    var dataColumns = [];
    dataColumns.push(
        {
            key: "Numeric",
            value: "age"
        },
        {
            key: "String",
            value: "sex"
        },
        {
            key: "Numeric",
            value: "thyroxine"
        },
        {
            key: "String",
            value: "sick"
        },
        {
            key: "String",
            value: "pregnant"
        },
        {
            key: "Numeric",
            value: "hypopituitary"
        },
        {
            key: "Numeric",
            value: "goitre"
        }
    );

    // loading all columns for first time loading the page
    $.each(dataColumns, function (i, item) {
        $('#ddlAvailableColumns').append($('<option>', {
            value: item.value,
            text: item.value
        }));
    });

    // loading columns based on data type selection, and can be All Types, Numeric or String
    $('#ddlAvailableColumnTypes').change(function () {
        $('#ddlAvailableColumns').empty();
        let selectedKey = $('#ddlAvailableColumnTypes :selected').text();

        if (selectedKey !== 'All Types') {
            $.each(dataColumns, function (i, item) {
                let exists = false;
                // checking for existing items into selected list. If true, then non be displayed into Available list
                $('#ddlSelectedColumns option').each(function () {
                    if (this.value === item.value) {
                        exists = true;
                        return false;
                    }
                });
                // loading Available list
                if (selectedKey === item.key && exists !== true) {
                    $('#ddlAvailableColumns').append($('<option>', {
                        value: item.value,
                        text: item.value
                    }));
                }
            });
        }
        else {
            // this loading is for All Types selection, and checking for existing items from selected list
            $.each(dataColumns, function (i, item) {
                let exists = false;
                $('#ddlSelectedColumns option').each(function () {
                    if (this.value === item.value) {
                        exists = true;
                        return false;
                    }
                });

                if (exists !== true) {
                    $('#ddlAvailableColumns').append($('<option>', {
                        value: item.value,
                        text: item.value
                    }));
                }
            });
        }
    });

    // loading columns based on data type selection, and can be All Types, Numeric or String
   /* $('#ddlSelectedDataTypes').change(function () {
        $('#ddlSelectedColumns').empty();
        let selectedKey = $('#ddlSelectedDataTypes :selected').text();

        if (selectedKey !== 'All Types') {
            $.each(dataColumns, function (i, item) {
                let exists = false;
                // checking for existing items into selected list. If true, then non be displayed into Available list
                $('#ddlAvailableColumns option').each(function () {
                    if (this.value === item.value) {
                        exists = true;
                        return false;
                    }
                });
                // loading Available list
                if (selectedKey === item.key && exists !== true) {
                    $('#ddlSelectedColumns').append($('<option>', {
                        value: item.value,
                        text: item.value
                    }));
                }
            });
        }
        else {
            // this loading is for All Types selection, and checking for existing items from selected list
            $.each(dataColumns, function (i, item) {
                let exists = false;
                $('#ddlAvailableColumns option').each(function () {
                    if (this.value === item.value) {
                        exists = true;
                        return false;
                    }
                });

                if (exists !== true) {
                    $('#ddlSelectedColumns').append($('<option>', {
                        value: item.value,
                        text: item.value
                    }));
                }
            });
        }
    });*/

    // move selected column to right(Selected), and remove from left(Available)
    $('#btnMoveToRight').click(function () {
        $("#ddlAvailableColumns :selected").map(function (i, txtValue) {
            $('#ddlSelectedColumns').append($('<option>', {
                value: $(txtValue).text(),
                text: $(txtValue).text()
            }));
        });
        $("#ddlAvailableColumns :selected").remove();
    });

    // back column to left(Available), and remove from right(Selected) list
    $('#btnMoveToLeft').click(function () {
        $('#ddlSelectedColumns :selected').map(function (i, txtValue) {
            $('#ddlAvailableColumns').append($('<option>', {
                value: $(txtValue).text(),
                text: $(txtValue).text()
            }));
        });
        $("#ddlSelectedColumns :selected").remove();
    });



    var selectedColumnsFromUser = [];
    $('#getSelectedColumns').click(function () {
        selectedColumnsFromUser = [];
        $('#ddlSelectedColumns option').map(function(i, item) {
            //alert($(txtValue).text());
            let currentValue = {
                key: item.value,
                value: item.text
            };
            selectedColumnsFromUser.push({ "selecte value" : currentValue });
        });
        alert(JSON.stringify(selectedColumnsFromUser));
    });


    //$('#colSet p').html("Selected columns: <b>" + ddlText.get() + "</b>");
    //alert(ddlText);
});