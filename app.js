var app = new Vue({
	el: '#app',
	data:{
		items:[
			{
				name:"แฮร์รี่ พอตเตอร์กับศิลาอาถรรพ์ เล่ม 1",
				url:"./img/1.png",
				price:100,
				active:false,
				num:1,
			},
			{
				name:"แฮร์รี่ พอตเตอร์กับห้องแห่งความลับ เล่ม 2",
				url:"./img/2.png",
				price:100,
				active:false,
				num:1
			},
			{
				name:"แฮร์รี่ พอตเตอร์กับนักโทษแห่งอัซคาบัน เล่ม 3",
				url:"./img/3.png",
				price:100,
				active:false,
				num:1
			},
			{
				name:"แฮร์รี่ พอตเตอร์กับถ้วยอัคนี เล่ม 4",
				url:"./img/4.png",
				price:100,
				active:false,
				num:1
			},
			{
				name:"แฮร์รี่ พอตเตอร์กับภาคีนกฟีนิกซ์ เล่ม 5",
				url:"./img/5.png",
				price:100,
				active:false,
				num:1
			},
			{
				name:"แฮร์รี่ พอตเตอร์กับเจ้าชายเลือดผสม เล่ม 6",
				url:"./img/6.png",
				price:100,
				active:false,
				num:1
			},
			{
				name:"แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต เล่ม 7",
				url:"./img/7.png",
				price:100,
				active:false,
				num:1
			}

		],
		discount:0,
		disc:0,
	},
	methods:{
		selected:function(item){
			item.active=!item.active
			if (item.active==true) {
				this.discount++
			}else{
				this.discount--
			}
		},
		addNum:function(item){
			item.num++
		},
		delNum:function(item){
			item.num--
		},
		totals:function(){
			var total=0;
			var dis=0;
			var pay=0;
			this.items.forEach(function(item){
				if (item.active) {

					price=(item.price*item.num),
					total+=price

				}	
			})
			if (this.discount==2) {
					dis=total*0.1,
					total=total-dis
					this.disc=dis
				}else if (this.discount==3) {
					dis=total*0.2,
					total=total-dis
					this.disc=dis
				}
				else if (this.discount==4) {
					dis=total*0.3,
					total=total-dis
					this.disc=dis
				}
				else if (this.discount==5) {
					dis=total*0.4,
					total=total-dis
					this.disc=dis
				}
				else if (this.discount==6) {
					dis=total*0.5,
					total=total-dis
					this.disc=dis
				}
				else if (this.discount==7) {
					dis=total*0.6,
					total=total-dis
					this.disc=dis
				}else{
					dis=total*0.0,
					total=total-dis
					this.disc=dis
				}
			return total;
		},
	

	}
})