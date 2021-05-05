using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectMovies.Migrations
{
    public partial class new_server_name : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "star",
                table: "Movie",
                newName: "Star");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Movie",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "genre",
                table: "Movie",
                newName: "Genre");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Star",
                table: "Movie",
                newName: "star");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Movie",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Genre",
                table: "Movie",
                newName: "genre");
        }
    }
}
