
export const voucherConfig= {
    link:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'link',
            placeholder: 'Link to Facebook...'
        },
        value: '',
        validation:{
            required: true,
            format: '(?:(?:http|https):\\/\\/)?(?:www.)?facebook.com\\/(?:(?:\\w)*#!\\/)?(?:pages\\/)?(?:[?\\w\\-]*\\/)?(?:profile.php\\?id=(?=\\d.*))?([\\w\\-]*)?'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Link to Facebook'
    },
    image:{
        elementType: 'file',
        elementConfig:{
            type:'file',
            name: 'image',
            accept:'.jpg, .jpeg, .png'
        },
        validation:{
        required:false,
        },
        valid:true
    },
}
export const serviceConfig = {
    name: {
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'name',
            placeholder: 'New Service Name...'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Name'
    },
    english:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'english',
            placeholder: 'Service English Name...'
        },
        value: '',
        validation:{
            required: true,
            format: '^(?![ .]+$)[a-zA-Z .]*$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid English Name'
    },
    type:{
        elementType: 'select',
        elementConfig:{
            options:[
                {value:'', display:'Please select Service Type'},
                {value:'facial', display:'Facial Skincare'},
                {value: 'shampoo', display:'Shampoo and Eyelash Extensions'}
            ]
        },
        value: '',
        validation:{
            required: true,
        },
        valid: false,
        touched:false
    },
    des:{
        elementType: 'textarea',
        elementConfig:{
            type:'textarea',
            name: 'des',
            placeholder: 'Service Description...',
            rows: 4,
            cols: 50,
        },
        value: '',
        validation:{
            required: true,
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Description'
    },
    time:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'time',
            placeholder: 'Service Duration ...'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Time'
    },
    price:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'price',
            placeholder: 'Service Price ...'
        },
        value: '',
        validation:{
            required: true,
            format: '^\\d+(,\\d{3})*(\\.\\d{1,2})?$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Price'
    },
    rank:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'rank',
            placeholder: 'Service Rank ...'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Rank'
    },
    image:{
        elementType: 'file',
        elementConfig:{
            type:'file',
            name: 'image',
            accept:'.jpg, .jpeg, .png, .gif'
        },
        validation:{
        required:false,
        },
        valid:true
    },
}
export const customerConfig = {
    name:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'name',
            placeholder: 'New Customer Name...'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Name'
    },
    phone:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'phone',
            placeholder: 'Customer Phone Number...'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Phone Number'
    },
    dob:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'dob',
            placeholder: 'Date of Birth: dd/mm/yyyy'
        },
        value:'',
        validation:{
            required: true,
            format: '^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$'
        },
        valid: false,
        touched: false,
        errorMess: "Please input the valid Date of Birth"
    },
    email:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'email',
            placeholder:'Customer Email...'
        },
        value: '',
        validation:{
            required: true,
            format:'^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Email'
    },
    facebook:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'facebook',
            placeholder:'Customer Facebook...'
        },
        value: '',
        validation:{
            required: true,
            format: '(?:(?:http|https):\\/\\/)?(?:www.)?facebook.com\\/(?:(?:\\w)*#!\\/)?(?:pages\\/)?(?:[?\\w\\-]*\\/)?(?:profile.php\\?id=(?=\\d.*))?([\\w\\-]*)?'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Customer Facebook'
    },
    //them an = 0
    point:{
        elementType:'hidden',
        elementConfig:{
            type:'hidden',
            name:'point'
        },
        value:0,
        validation:{
            required:false,
        },
        valid:true,
    },
    blacklist:{
        elementType:'hidden',
        elementConfig:{
            type:'hidden',
            name:'blacklist'
        },
        value: false,
        validation:{
            required:false,
        },
        valid:true
    }
}
export const staffConfig = {
    name:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'name',
            placeholder: 'New Staff Name...'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Name'
    },
    phone:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'phone',
            placeholder: 'Staff Phone Number...'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Phone Number'
    },
    dob:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'dob',
            placeholder: 'Date of Birth: dd/mm/yyyy'
        },
        value:'',
        validation:{
            required: true,
            format: '^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$'
        },
        valid: false,
        touched: false,
        errorMess: "Please input the valid Date of Birth"
    },
    email:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'email',
            placeholder:'Staff Email...'
        },
        value: '',
        validation:{
            required: true,
            format:'^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Email'
    },
    position:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'position',
            placeholder:'Staff Position...'
        },
        value:'',
        validation:{
            required:true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid:false,
        touched:false,
        errorMess: 'Please input the valid Position'
    },
    rate:{
        elementType:'text',
        elementConfig:{
            type:'text',
            name:'commission rate',
            placeholder: 'Commission Rate...'
        },
        value: '',
        validation:{
            required: true,
            format: '\\d+(?:\\.\\d+)?%'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the Commission Rate'
    },
    salary:{
        elementType:'text',
        elementConfig:{
            type:'text',
            name:'Salary',
            placeholder: 'Salary...'
        },
        value: '',
        validation:{
            required: true,
            format: '\\d+(?:\\.\\d+)?(?=VND\\b)'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the Salary'
    }
}