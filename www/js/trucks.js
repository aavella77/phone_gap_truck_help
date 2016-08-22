var serviceURL = "http://54.149.111.152/truck/services/";

var employees;

$('#employeeListPage').live('pageshow', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'trucks.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><h4>' + employee.biz_name + '</h4><br> <a href="tel:' + employee.biz_phone + '">' + employee.biz_phone + '</a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}

//'<img src="pics/' + employee.picture + '"/>' +
