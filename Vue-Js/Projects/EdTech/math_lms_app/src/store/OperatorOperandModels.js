export default{
    oper:{
        id:'',
        val:'',//+-*
        step:0,//1234
        side:'',//lhs/rhs
        type:'oper',
        paraNo:0,//presently open paranthesis(if any)
        configShape:{
            x: 600,
            y: 250,
            radius: 30,
            // fill: "#50CB93",
            // stroke: "#50CB93",
            fill:"#FDE49C",
            stroke:"#FFB740",
            strokeWidth: 4
        },
    
        //equal operator text(=)
        configValue:{
            x:587,//shapeX-13
            y:235,//shapeY-15
            text: '=',
            fontSize: 40
        }
    },
    opd:{
        //sample object for using in various places
        seq:'',//sequence/index in equation(to know the initial place)
        id:'operand-3',
        type:'opd',//for operand,
        valType:'const',//var/const
        side:'lhs',
        step:0,
        val:'',
        coeff:null,//coeff val
        paraNo:0,
        sign:'',
        coeffId:null,
        configShape:{
            x:700,
            y:220,//equalToX y-10
            width:70,
            height:70,
            fill:"#FDE49C",
            stroke:"#FFB740",
            // draggable:true,
        },
        configValue:{
        x:715,//rectX+15
        y:230,//recty:+10
        text: '7',
        fontSize: 40
        }
    }
}