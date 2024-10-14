import React, {useState} from "react";
import {Treebeard, decorators} from "react-treebeard";
import styles from "./styles";
import "./folder-tree.css"

const data1 = {
    name: "dbts",
    toggled: true,
    active: true,
    children: [
        {
            name: "models",
            children: [
                {
                    name: "marts",
                    children: [
                        {
                            name: "clm",
                            nickname: "pikachu",

                            children: [
                                {
                                    name: "sa_use_deploys_rollup.sql",
                                    model: "model.data_and_analytics.sa_use_deploys_rollup",
                                    nickname: "pikachu"
                                },
                                {
                                    name: "sa_renewals_rollup.sql",
                                    model: "model.data_and_analytics.sa_renewals_rollup"
                                },
                                {
                                    name: "fct_try.sql",
                                    model: "model.data_and_analytics.fct_try"
                                },
                                {
                                    name: "fct_discover.sql",
                                    model: "model.data_and_analytics.fct_discover"
                                },
                                {
                                    name: "sa_use_enterprise_seats_purchase_rollup.sql",
                                    model:
                                        "model.data_and_analytics.sa_use_enterprise_seats_purchase_rollup"
                                },
                                {
                                    name: "sa_upgrade_discover_rollup.sql",
                                    model: "model.data_and_analytics.sa_upgrade_discover_rollup"
                                },
                                {
                                    name: "sa_discover_flat.sql",
                                    model: "model.data_and_analytics.sa_discover_flat"
                                },
                                {
                                    name: "sa_use_usecase_behavior_rollup.sql",
                                    model:
                                        "model.data_and_analytics.sa_use_usecase_behavior_rollup"
                                },
                                {
                                    name: "sa_use_integrations_rollup.sql",
                                    model: "model.data_and_analytics.sa_use_integrations_rollup"
                                },
                                {
                                    name: "fct_try_rollup.sql",
                                    model: "model.data_and_analytics.fct_try_rollup"
                                },
                                {
                                    name: "sa_buy_rollup.sql",
                                    model: "model.data_and_analytics.sa_buy_rollup"
                                },
                                {
                                    name: "sa_discover_rollup.sql",
                                    model: "model.data_and_analytics.sa_discover_rollup"
                                },
                                {
                                    name: "dim_mta_utm_details.sql",
                                    model: "model.data_and_analytics.dim_mta_utm_details"
                                },
                                {
                                    name: "fct_mta_attribution_details.sql",
                                    model: "model.data_and_analytics.fct_mta_attribution_details"
                                },
                                {
                                    name: "sa_open_pipeline_rollup.sql",
                                    model: "model.data_and_analytics.sa_open_pipeline_rollup"
                                },
                                {
                                    name: "sa_use_firmographic_rollup.sql",
                                    model: "model.data_and_analytics.sa_use_firmographic_rollup"
                                },
                                {
                                    name: "fct_discover_rollup.sql",
                                    model: "model.data_and_analytics.fct_discover_rollup"
                                },
                                {
                                    name: "clm.yml",
                                    model:
                                        "test.data_and_analytics.not_null_dim_mta_utm_details_userid.c3bb50a62e"
                                }
                            ]
                        },
                        {
                            name: "hightouch",
                            children: [
                                {
                                    name: "transaction__c_upsert.sql",
                                    model: "model.data_and_analytics.transaction__c_upsert"
                                },
                                {
                                    name: "sm_account__c_upsert.sql",
                                    model: "model.data_and_analytics.sm_account__c_upsert"
                                },
                                {
                                    name: "hightouch.yml",
                                    model:
                                        "test.data_and_analytics.not_null_transaction__c_upsert_transaction_id__c.d20d01255d"
                                }
                            ]
                        },
                        {
                            name: "experiments",
                            children: [
                                {
                                    name: "expts_paid_rollup.sql",
                                    model: "model.data_and_analytics.expts_paid_rollup"
                                },
                                {
                                    name: "expts_cs_rollup.sql",
                                    model: "model.data_and_analytics.expts_cs_rollup"
                                },
                                {
                                    name: "expts_salesfunnel_rollup.sql",
                                    model: "model.data_and_analytics.expts_salesfunnel_rollup"
                                },
                                {
                                    name: "expts_usabilla_rollup.sql",
                                    model: "model.data_and_analytics.expts_usabilla_rollup"
                                },
                                {
                                    name: "expts_engagement_rollup.sql",
                                    model: "model.data_and_analytics.expts_engagement_rollup"
                                }
                            ]
                        }
                    ],
                    nickname: "pikachu"
                }
            ]
        },
        {
            name: "snapshots",
            children: [
                {
                    name: "experiments",
                    children: [
                        {
                            name: "experiments_snapshot.sql",
                            model: "snapshot.data_and_analytics.experiments_snapshot"
                        },
                        {
                            name: "fct_expts_usabilla_snapshot.sql",
                            model: "snapshot.data_and_analytics.fct_expts_usabilla_snapshot"
                        },
                        {
                            name: "fct_expts_engagement_snapshot.sql",
                            model: "snapshot.data_and_analytics.fct_expts_engagement_snapshot"
                        },
                        {
                            name: "fct_expts_paid_snapshot.sql",
                            model: "snapshot.data_and_analytics.fct_expts_paid_snapshot"
                        },
                        {
                            name: "fct_expts_cs_snapshot.sql",
                            model: "snapshot.data_and_analytics.fct_expts_cs_snapshot"
                        },
                        {
                            name: "user_experiments_snapshot.sql",
                            model: "snapshot.data_and_analytics.user_experiments_snapshot"
                        },
                        {
                            name: "snp_experiments.yml",
                            model:
                                "test.data_and_analytics.not_null_experiments_snapshot_experiment_id.9b48b42aa6"
                        }
                    ]
                }
            ]
        },
        {
            name: "tests",
            children: [
                {
                    name: "assert_mta_attribution_channel_sum.sql",
                    model: "test.data_and_analytics.assert_mta_attribution_channel_sum"
                }
            ]
        }
    ]
};

const Header = ({onSelect, style, customStyles, node}) => {
    const iconType = node.children ? "folder" : "file-text";
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: "5px"};

    return (
        <span style={style.base} onClick={onSelect}>
      {/* <Div style={node.selected ? {...style.title, ...customStyles.header.title} : style.title}> */}
            <i className={iconClass} style={iconStyle}/>
            {node.name}
            {/* </Div> */}
    </span>
    );
};

export default function FolderTree() {
    const [data, setData] = useState(data1);
    const [cursor, setCursor] = useState(false);
    const [model, setModel] = React.useState("");

    const onToggle = (node, toggled) => {
        console.log("df", node);
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(node);
        setData(Object.assign({}, data));
        if (node.model) {
            setModel(node.model);
        } else {
            setModel("");
        }
    };

    return (
        <div>
            <div className="table-heading">Tables and Views</div> {/*table heading 노필요 */}
            <div className="table-struct sideNavBar">{/*table struct 노필요*/}
                <Treebeard
                    data={data}
                    onToggle={onToggle}
                    style={styles}
                    decorators={{...decorators, Header}}
                />
            </div>
        </div>
    );
};

